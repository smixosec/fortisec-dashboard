"use client"

import * as React from "react"
import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Filter } from "lucide-react"
import { mockAlerts, type Severity } from "@/lib/mock-data"
import { filterAlerts, formatDateTime, getSeverityBgColor, getStatusColor, exportToCSV } from "@/lib/utils-data"

function AlertsContent() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [severityFilter, setSeverityFilter] = React.useState<Severity | "all">("all")

  const filteredAlerts = filterAlerts(mockAlerts, severityFilter === "all" ? undefined : severityFilter, searchTerm)

  const handleExport = () => {
    const exportData = filteredAlerts.map((alert) => ({
      timestamp: alert.timestamp,
      system: alert.system,
      severity: alert.severity,
      status: alert.status,
      type: alert.type,
      message: alert.message,
    }))
    exportToCSV(exportData, "fortisec-alerts")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Security Alerts</h1>
        <p className="mt-2 text-muted-foreground">Monitor and manage security incidents across your infrastructure</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Alert Log</CardTitle>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search alerts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={severityFilter} onValueChange={(value) => setSeverityFilter(value as Severity | "all")}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severity</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={handleExport}>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>System</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="max-w-md">Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAlerts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                      No alerts found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAlerts.map((alert) => (
                    <TableRow key={alert.id}>
                      <TableCell className="font-mono text-xs">{formatDateTime(alert.timestamp)}</TableCell>
                      <TableCell className="font-medium">{alert.system}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{alert.type}</TableCell>
                      <TableCell>
                        <Badge className={getSeverityBgColor(alert.severity)}>{alert.severity}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(alert.status)}>
                          {alert.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-md truncate text-sm">{alert.message}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredAlerts.length} of {mockAlerts.length} alerts
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function AlertsPage() {
  return (
    <Suspense fallback={null}>
      <AlertsContent />
    </Suspense>
  )
}

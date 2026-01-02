"use client"

import * as React from "react"
import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"
import { mockSystems } from "@/lib/mock-data"
import { filterSystems, formatDateTime, getHardeningStatusColor } from "@/lib/utils-data"

function SystemsContent() {
  const [searchTerm, setSearchTerm] = React.useState("")

  const filteredSystems = filterSystems(mockSystems, searchTerm)

  const compliantCount = mockSystems.filter((s) => s.hardeningStatus === "Compliant").length
  const partialCount = mockSystems.filter((s) => s.hardeningStatus === "Partial").length
  const nonCompliantCount = mockSystems.filter((s) => s.hardeningStatus === "Non-Compliant").length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Inventory</h1>
        <p className="mt-2 text-muted-foreground">Monitor server compliance, patch levels, and hardening status</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Compliant</p>
                <p className="mt-1 text-3xl font-bold text-success">{compliantCount}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-success/10" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Partial</p>
                <p className="mt-1 text-3xl font-bold text-warning">{partialCount}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-warning/10" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Non-Compliant</p>
                <p className="mt-1 text-3xl font-bold text-destructive">{nonCompliantCount}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-destructive/10" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Registered Systems</CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search systems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>System Name</TableHead>
                  <TableHead>Operating System</TableHead>
                  <TableHead>Patch Level</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Hardening Status</TableHead>
                  <TableHead>Last Scan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSystems.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                      No systems found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredSystems.map((system) => (
                    <TableRow key={system.id}>
                      <TableCell className="font-medium">{system.name}</TableCell>
                      <TableCell>{system.os}</TableCell>
                      <TableCell className="font-mono text-xs">{system.patchLevel}</TableCell>
                      <TableCell className="font-mono text-sm">{system.ipAddress}</TableCell>
                      <TableCell>
                        <Badge className={getHardeningStatusColor(system.hardeningStatus)}>
                          {system.hardeningStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{formatDateTime(system.lastScan)}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredSystems.length} of {mockSystems.length} systems
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function SystemsPage() {
  return (
    <Suspense fallback={null}>
      <SystemsContent />
    </Suspense>
  )
}

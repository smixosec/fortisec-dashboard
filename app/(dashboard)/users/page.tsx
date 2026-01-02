"use client"

import * as React from "react"
import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Shield, ShieldOff } from "lucide-react"
import { mockUsers } from "@/lib/mock-data"
import { filterUsers, formatDateTime } from "@/lib/utils-data"

function UsersContent() {
  const [searchTerm, setSearchTerm] = React.useState("")

  const filteredUsers = filterUsers(mockUsers, searchTerm)

  const adminCount = mockUsers.filter((u) => u.role === "Admin").length
  const analystCount = mockUsers.filter((u) => u.role === "Analyst").length
  const viewerCount = mockUsers.filter((u) => u.role === "Viewer").length
  const mfaEnabledCount = mockUsers.filter((u) => u.mfaEnabled).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="mt-2 text-muted-foreground">Manage user accounts, roles, and authentication settings</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Admins</p>
              <p className="text-3xl font-bold">{adminCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Analysts</p>
              <p className="text-3xl font-bold">{analystCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Viewers</p>
              <p className="text-3xl font-bold">{viewerCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">MFA Enabled</p>
              <p className="text-3xl font-bold text-success">{mfaEnabledCount}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>User Accounts</CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search users..."
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
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>MFA</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                      No users found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.username}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            user.role === "Admin"
                              ? "border-primary text-primary"
                              : user.role === "Analyst"
                                ? "border-chart-2 text-chart-2"
                                : "border-muted-foreground text-muted-foreground"
                          }
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {user.mfaEnabled ? (
                          <div className="flex items-center gap-2 text-success">
                            <Shield className="h-4 w-4" />
                            <span className="text-sm">Enabled</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-destructive">
                            <ShieldOff className="h-4 w-4" />
                            <span className="text-sm">Disabled</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            user.status === "Active"
                              ? "border-success text-success"
                              : "border-muted-foreground text-muted-foreground"
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{formatDateTime(user.lastLogin)}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredUsers.length} of {mockUsers.length} users
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function UsersPage() {
  return (
    <Suspense fallback={null}>
      <UsersContent />
    </Suspense>
  )
}

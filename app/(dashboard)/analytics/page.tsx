"use client"

import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Shield, Server, Users } from "lucide-react"
import {
  dashboardStats,
  mockLoginAttempts,
  mockAttackVectors,
  mockSeverityDistribution,
  mockGeoAccess,
} from "@/lib/mock-data"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const COLORS = {
  primary: "hsl(var(--chart-1))",
  secondary: "hsl(var(--chart-2))",
  success: "hsl(var(--success))",
  warning: "hsl(var(--warning))",
  destructive: "hsl(var(--destructive))",
  chart3: "hsl(var(--chart-3))",
  chart4: "hsl(var(--chart-4))",
  chart5: "hsl(var(--chart-5))",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Security Analytics</h1>
        <p className="mt-2 text-muted-foreground">Real-time security metrics and threat intelligence</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Alerts"
          value={dashboardStats.totalAlerts}
          change="+12% from last week"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-destructive"
        />
        <StatCard
          title="Open Alerts"
          value={dashboardStats.openAlerts}
          change="+8% from last week"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-warning"
        />
        <StatCard
          title="Critical Systems"
          value={dashboardStats.criticalSystems}
          change="-2 from last week"
          changeType="positive"
          icon={Server}
          iconColor="text-success"
        />
        <StatCard
          title="Active Users"
          value={dashboardStats.activeUsers}
          change="No change"
          changeType="neutral"
          icon={Users}
          iconColor="text-primary"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Login Attempts (Last 30 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockLoginAttempts}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="date"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return `${date.getMonth() + 1}/${date.getDate()}`
                  }}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "hsl(var(--popover-foreground))" }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={COLORS.primary}
                  strokeWidth={2}
                  dot={false}
                  name="Login Attempts"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attack Vectors Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockAttackVectors}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="label"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="value" fill={COLORS.primary} name="Incidents" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Severity Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockSeverityDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ label, value }) => `${label}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mockSeverityDistribution.map((entry, index) => {
                    const colors = [COLORS.destructive, COLORS.warning, COLORS.success]
                    return <Cell key={`cell-${index}`} fill={colors[index]} />
                  })}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Access Attempts</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockGeoAccess} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis
                  dataKey="label"
                  type="category"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  width={100}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="value" fill={COLORS.secondary} name="Access Attempts" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-success" />
            Compliance Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-end gap-4">
              <div className="text-5xl font-bold">{dashboardStats.complianceScore}%</div>
              <div className="mb-2 text-sm text-muted-foreground">Overall compliance rating</div>
            </div>
            <div className="h-4 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-gradient-to-r from-success to-chart-3 transition-all"
                style={{ width: `${dashboardStats.complianceScore}%` }}
              />
            </div>
            <div className="grid gap-4 pt-4 md:grid-cols-3">
              <div className="space-y-1">
                <p className="text-sm font-medium">ISO 27001</p>
                <p className="text-2xl font-bold">92%</p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full bg-success" style={{ width: "92%" }} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">NIST CSF</p>
                <p className="text-2xl font-bold">85%</p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full bg-warning" style={{ width: "85%" }} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">CIS Controls</p>
                <p className="text-2xl font-bold">84%</p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full bg-warning" style={{ width: "84%" }} />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

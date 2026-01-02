"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Bell, Shield, Database, FileText } from "lucide-react"

export default function SettingsPage() {
  const [alertThreshold, setAlertThreshold] = React.useState("medium")
  const [logRetention, setLogRetention] = React.useState("90")
  const [autoResolve, setAutoResolve] = React.useState(true)
  const [emailNotifications, setEmailNotifications] = React.useState(true)
  const [slackIntegration, setSlackIntegration] = React.useState(false)

  const [iso27001, setIso27001] = React.useState(true)
  const [nistCsf, setNistCsf] = React.useState(true)
  const [cisControls, setCisControls] = React.useState(true)
  const [pciDss, setPciDss] = React.useState(false)
  const [hipaa, setHipaa] = React.useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-2 text-muted-foreground">Configure system preferences and security policies</p>
      </div>

      <Tabs defaultValue="alerts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="alerts">
            <Bell className="mr-2 h-4 w-4" />
            Alerts
          </TabsTrigger>
          <TabsTrigger value="compliance">
            <Shield className="mr-2 h-4 w-4" />
            Compliance
          </TabsTrigger>
          <TabsTrigger value="logs">
            <Database className="mr-2 h-4 w-4" />
            Logs
          </TabsTrigger>
          <TabsTrigger value="integrations">
            <FileText className="mr-2 h-4 w-4" />
            Integrations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alert Thresholds</CardTitle>
              <CardDescription>Configure when and how alerts are triggered</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="threshold">Minimum Severity Level</Label>
                <Select value={alertThreshold} onValueChange={setAlertThreshold}>
                  <SelectTrigger id="threshold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - All alerts</SelectItem>
                    <SelectItem value="medium">Medium - Medium and High only</SelectItem>
                    <SelectItem value="high">High - Critical alerts only</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Only alerts meeting or exceeding this severity will trigger notifications
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-resolve Low Severity Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically mark low severity alerts as resolved after 24 hours
                    </p>
                  </div>
                  <Switch checked={autoResolve} onCheckedChange={setAutoResolve} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email notifications for new critical alerts</p>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Slack Integration</Label>
                    <p className="text-sm text-muted-foreground">Send alerts to Slack channel #security-ops</p>
                  </div>
                  <Switch checked={slackIntegration} onCheckedChange={setSlackIntegration} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="failed-login">Failed Login Threshold</Label>
                <Input id="failed-login" type="number" placeholder="5" defaultValue="5" />
                <p className="text-sm text-muted-foreground">
                  Number of failed login attempts before triggering an alert
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="scan-frequency">Vulnerability Scan Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger id="scan-frequency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Frameworks</CardTitle>
              <CardDescription>Select which compliance frameworks to monitor and enforce</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="iso27001"
                  checked={iso27001}
                  onCheckedChange={(checked) => setIso27001(checked as boolean)}
                />
                <div className="flex-1 space-y-1">
                  <Label
                    htmlFor="iso27001"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    ISO/IEC 27001
                  </Label>
                  <p className="text-sm text-muted-foreground">Information security management system standard</p>
                </div>
                <Badge className="bg-success/10 text-success">92%</Badge>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="nist" checked={nistCsf} onCheckedChange={(checked) => setNistCsf(checked as boolean)} />
                <div className="flex-1 space-y-1">
                  <Label
                    htmlFor="nist"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    NIST Cybersecurity Framework
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Framework for improving critical infrastructure cybersecurity
                  </p>
                </div>
                <Badge className="bg-warning/10 text-warning">85%</Badge>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="cis"
                  checked={cisControls}
                  onCheckedChange={(checked) => setCisControls(checked as boolean)}
                />
                <div className="flex-1 space-y-1">
                  <Label
                    htmlFor="cis"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    CIS Controls v8
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Center for Internet Security cybersecurity best practices
                  </p>
                </div>
                <Badge className="bg-warning/10 text-warning">84%</Badge>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="pci" checked={pciDss} onCheckedChange={(checked) => setPciDss(checked as boolean)} />
                <div className="flex-1 space-y-1">
                  <Label
                    htmlFor="pci"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    PCI DSS
                  </Label>
                  <p className="text-sm text-muted-foreground">Payment Card Industry Data Security Standard</p>
                </div>
                <Badge variant="outline" className="text-muted-foreground">
                  Not Enabled
                </Badge>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="hipaa" checked={hipaa} onCheckedChange={(checked) => setHipaa(checked as boolean)} />
                <div className="flex-1 space-y-1">
                  <Label
                    htmlFor="hipaa"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    HIPAA
                  </Label>
                  <p className="text-sm text-muted-foreground">Health Insurance Portability and Accountability Act</p>
                </div>
                <Badge variant="outline" className="text-muted-foreground">
                  Not Enabled
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audit Settings</CardTitle>
              <CardDescription>Configure compliance audit and reporting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="audit-frequency">Audit Frequency</Label>
                <Select defaultValue="quarterly">
                  <SelectTrigger id="audit-frequency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="annually">Annually</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="report-email">Compliance Report Email</Label>
                <Input
                  id="report-email"
                  type="email"
                  placeholder="compliance@fortisec.local"
                  defaultValue="compliance@fortisec.local"
                />
                <p className="text-sm text-muted-foreground">Email address to receive compliance reports</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Log Retention</CardTitle>
              <CardDescription>Configure how long security logs are stored</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="retention">Retention Period (Days)</Label>
                <Select value={logRetention} onValueChange={setLogRetention}>
                  <SelectTrigger id="retention">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days (Recommended)</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">365 days</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Logs older than this period will be automatically archived
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="archive-location">Archive Location</Label>
                <Input
                  id="archive-location"
                  placeholder="s3://fortisec-logs/archive"
                  defaultValue="s3://fortisec-logs/archive"
                />
                <p className="text-sm text-muted-foreground">S3 bucket or storage location for archived logs</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Encrypt Archived Logs</Label>
                    <p className="text-sm text-muted-foreground">Use AES-256 encryption for archived log files</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Compress Logs</Label>
                    <p className="text-sm text-muted-foreground">
                      Compress log files before archiving to save storage space
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Log Sources</CardTitle>
              <CardDescription>Configure which systems send logs to FortiSec</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Web Servers</Label>
                  <p className="text-sm text-muted-foreground">Apache, Nginx access and error logs</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Database Servers</Label>
                  <p className="text-sm text-muted-foreground">PostgreSQL, MySQL query and error logs</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Firewall Logs</Label>
                  <p className="text-sm text-muted-foreground">Firewall traffic and blocked connection logs</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Authentication Logs</Label>
                  <p className="text-sm text-muted-foreground">Login attempts, MFA, and session logs</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Application Logs</Label>
                  <p className="text-sm text-muted-foreground">Custom application error and debug logs</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SIEM Integration</CardTitle>
              <CardDescription>Connect FortiSec to external SIEM platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siem-platform">SIEM Platform</Label>
                <Select defaultValue="splunk">
                  <SelectTrigger id="siem-platform">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="splunk">Splunk</SelectItem>
                    <SelectItem value="elastic">Elastic Stack</SelectItem>
                    <SelectItem value="sentinel">Azure Sentinel</SelectItem>
                    <SelectItem value="qradar">IBM QRadar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="siem-endpoint">SIEM Endpoint URL</Label>
                <Input id="siem-endpoint" placeholder="https://splunk.fortisec.local:8088" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="siem-token">API Token</Label>
                <Input id="siem-token" type="password" placeholder="Enter SIEM API token" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Channels</CardTitle>
              <CardDescription>Configure external notification integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="slack-webhook">Slack Webhook URL</Label>
                <Input id="slack-webhook" placeholder="https://hooks.slack.com/services/..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="teams-webhook">Microsoft Teams Webhook URL</Label>
                <Input id="teams-webhook" placeholder="https://outlook.office.com/webhook/..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pagerduty">PagerDuty Integration Key</Label>
                <Input id="pagerduty" placeholder="Enter PagerDuty integration key" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Threat Intelligence</CardTitle>
              <CardDescription>Connect to external threat intelligence feeds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>AlienVault OTX</Label>
                  <p className="text-sm text-muted-foreground">Open Threat Exchange threat intelligence</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>MITRE ATT&CK</Label>
                  <p className="text-sm text-muted-foreground">Adversarial tactics and techniques knowledge base</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>VirusTotal</Label>
                  <p className="text-sm text-muted-foreground">File and URL scanning service</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button size="lg" className="gap-2">
          <Save className="h-4 w-4" />
          Save All Settings
        </Button>
      </div>
    </div>
  )
}

function Badge({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

import type { Alert, System, User, Severity } from "./mock-data"

export function filterAlerts(alerts: Alert[], severity?: Severity, search?: string) {
  return alerts.filter((alert) => {
    const matchesSeverity = !severity || alert.severity === severity
    const matchesSearch =
      !search ||
      alert.system.toLowerCase().includes(search.toLowerCase()) ||
      alert.message.toLowerCase().includes(search.toLowerCase()) ||
      alert.type.toLowerCase().includes(search.toLowerCase())
    return matchesSeverity && matchesSearch
  })
}

export function filterSystems(systems: System[], search?: string) {
  return systems.filter((system) => {
    return (
      !search ||
      system.name.toLowerCase().includes(search.toLowerCase()) ||
      system.ipAddress.includes(search) ||
      system.os.toLowerCase().includes(search.toLowerCase())
    )
  })
}

export function filterUsers(users: User[], search?: string) {
  return users.filter((user) => {
    return (
      !search ||
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
    )
  })
}

export function formatDateTime(isoString: string) {
  return new Date(isoString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}

export function getSeverityBgColor(severity: Severity) {
  switch (severity) {
    case "High":
      return "bg-destructive text-destructive-foreground hover:bg-destructive/80"
    case "Medium":
      return "bg-warning text-warning-foreground hover:bg-warning/80"
    case "Low":
      return "bg-primary text-primary-foreground hover:bg-primary/80"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function getStatusColor(status: string) {
  switch (status) {
    case "Open":
      return "border-destructive text-destructive"
    case "In-Progress":
      return "border-warning text-warning"
    case "Resolved":
      return "border-success text-success"
    default:
      return "border-muted text-muted-foreground"
  }
}

export function getHardeningStatusColor(status: string) {
  switch (status) {
    case "Compliant":
      return "bg-success text-success-foreground hover:bg-success/80"
    case "Partial":
      return "bg-warning text-warning-foreground hover:bg-warning/80"
    case "Non-Compliant":
      return "bg-destructive text-destructive-foreground hover:bg-destructive/80"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function exportToCSV(data: any[], filename: string) {
  const headers = Object.keys(data[0]).join(",")
  const rows = data.map((obj) => Object.values(obj).join(","))
  const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n")
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", `${filename}_${new Date().getTime()}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

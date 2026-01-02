export type Severity = "High" | "Medium" | "Low"

export interface Alert {
  id: string
  timestamp: string
  system: string
  severity: Severity
  status: "Open" | "In-Progress" | "Resolved"
  type: string
  message: string
}

export interface System {
  id: string
  name: string
  os: string
  patchLevel: string
  ipAddress: string
  hardeningStatus: "Compliant" | "Partial" | "Non-Compliant"
  lastScan: string
}

export interface User {
  id: string
  username: string
  email: string
  role: "Admin" | "Analyst" | "Viewer"
  mfaEnabled: boolean
  status: "Active" | "Inactive"
  lastLogin: string
}

export const dashboardStats = {
  totalAlerts: 42,
  openAlerts: 18,
  criticalSystems: 4,
  activeUsers: 152,
  complianceScore: 87,
}

export const mockLoginAttempts = [
  { date: "2023-12-01", value: 120 },
  { date: "2023-12-05", value: 250 },
  { date: "2023-12-10", value: 180 },
  { date: "2023-12-15", value: 420 },
  { date: "2023-12-20", value: 310 },
  { date: "2023-12-25", value: 150 },
  { date: "2023-12-30", value: 380 },
]

export const mockAttackVectors = [
  { label: "Phishing", value: 45 },
  { label: "Brute Force", value: 32 },
  { label: "SQL Injection", value: 12 },
  { label: "DDoS", value: 28 },
  { label: "Malware", value: 18 },
]

export const mockSeverityDistribution = [
  { label: "High", value: 8 },
  { label: "Medium", value: 15 },
  { label: "Low", value: 42 },
]

export const mockGeoAccess = [
  { label: "United States", value: 850 },
  { label: "Germany", value: 420 },
  { label: "United Kingdom", value: 380 },
  { label: "Singapore", value: 290 },
  { label: "Brazil", value: 150 },
]

export const mockAlerts: Alert[] = [
  {
    id: "AL-001",
    timestamp: "2024-01-02T10:30:00Z",
    system: "PROD-DB-01",
    severity: "High",
    status: "Open",
    type: "Brute Force",
    message: "Multiple failed login attempts detected from 192.168.1.45",
  },
  {
    id: "AL-002",
    timestamp: "2024-01-02T11:15:00Z",
    system: "WEB-FRONT-02",
    severity: "Medium",
    status: "In-Progress",
    type: "DDoS",
    message: "High traffic volume detected on port 443",
  },
  {
    id: "AL-003",
    timestamp: "2024-01-02T09:45:00Z",
    system: "AUTH-SRV",
    severity: "Low",
    status: "Resolved",
    type: "Policy Violation",
    message: "Non-compliant cipher suite used for TLS connection",
  },
]

export const mockSystems: System[] = [
  {
    id: "SYS-001",
    name: "PROD-DB-01",
    os: "Ubuntu 22.04 LTS",
    patchLevel: "v1.4.2",
    ipAddress: "10.0.1.45",
    hardeningStatus: "Compliant",
    lastScan: "2024-01-01T23:00:00Z",
  },
  {
    id: "SYS-002",
    name: "WEB-FRONT-02",
    os: "Windows Server 2022",
    patchLevel: "v1.3.9",
    ipAddress: "10.0.2.12",
    hardeningStatus: "Partial",
    lastScan: "2024-01-02T04:15:00Z",
  },
]

export const mockUsers: User[] = [
  {
    id: "USR-001",
    username: "j.doe",
    email: "john.doe@fortisec.com",
    role: "Admin",
    mfaEnabled: true,
    status: "Active",
    lastLogin: "2024-01-02T08:30:00Z",
  },
  {
    id: "USR-002",
    username: "s.smith",
    email: "sarah.smith@fortisec.com",
    role: "Analyst",
    mfaEnabled: true,
    status: "Active",
    lastLogin: "2024-01-01T14:45:00Z",
  },
]

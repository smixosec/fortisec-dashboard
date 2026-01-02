# FortiSec Dashboard

FortiSec Dashboard is an enterprise-grade security operations center (SOC) dashboard that provides real-time monitoring of security systems, alerts, user accounts, and compliance metrics. Built with modern web technologies, it delivers a professional interface designed for security analysts, DevSecOps engineers, and IT administrators.



![FortiSec Dashboard](https://img.shields.io/badge/FortiSec-Dashboard-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)
![SOC Ready](https://img.shields.io/badge/SOC-Ready-red)
![Enterprise Grade](https://img.shields.io/badge/Enterprise-Grade-blue)

**Enterprise Security Operations Center Dashboard for Modern SOC Teams**




</div>

<p align="center">
  <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg" width="50" alt="Next.js Logo">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/TypeScript.svg" width="50" alt="TypeScript Logo">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/TailwindCSS-Dark.svg" width="50" alt="Tailwind CSS Logo">
</p>

## Features

### Analytics Dashboard
- **Real-time Metrics**: Monitor total alerts, open incidents, critical systems, and active users
- **Login Attempt Tracking**: Visualize authentication patterns over the last 30 days
- **Attack Vector Analysis**: Bar chart showing distribution of attack types
- **Severity Distribution**: Pie chart categorizing threats by severity level
- **Geographic Analysis**: Track access attempts by country
- **Compliance Scoring**: Real-time compliance monitoring with framework-specific breakdowns (ISO 27001, NIST CSF, CIS Controls)

### Alert Management
- **Comprehensive Alert Log**: Table view of all security incidents with timestamps, affected systems, severity, and status
- **Advanced Filtering**: Filter alerts by severity level (High, Medium, Low)
- **Search Functionality**: Quick search across system names, alert types, and messages
- **CSV Export**: Export filtered alert data for external analysis
- **Status Tracking**: Monitor alert status (Open, Investigating, Resolved)
- **Color-Coded Severity**: Red (High), Yellow (Medium), Green (Low) visual indicators

### System Inventory
- **Server Monitoring**: Track all registered systems with OS details, patch levels, and IP addresses
- **Hardening Status**: Visual indicators for system compliance (Compliant, Partial, Non-Compliant)
- **Compliance Overview**: Statistics cards showing compliant vs. non-compliant systems
- **Patch Management**: Monitor kernel versions and security update status
- **Last Scan Tracking**: View when each system was last scanned for vulnerabilities
- **Search & Filter**: Quickly locate specific systems by name, OS, or IP address

### User Management
- **User Account Overview**: Complete list of users with roles, authentication status, and activity
- **Role-Based Access**: Track Admins, Analysts, and Viewers
- **MFA Monitoring**: Visual indicators showing which users have multi-factor authentication enabled
- **User Statistics**: Dashboard cards showing user distribution by role and MFA adoption
- **Activity Tracking**: Last login timestamps for all users
- **Status Management**: Monitor active and inactive user accounts

### Settings & Configuration
- **Alert Thresholds**: Configure minimum severity levels for notifications
- **Auto-Resolution**: Automatic resolution of low-severity alerts after 24 hours
- **Notification Channels**: Email, Slack, Teams, and PagerDuty integration
- **Compliance Frameworks**: Enable/disable monitoring for ISO 27001, NIST CSF, CIS Controls, PCI DSS, HIPAA
- **Log Retention**: Configure retention periods (30, 90, 180, 365 days)
- **SIEM Integration**: Connect to Splunk, Elastic Stack, Azure Sentinel, IBM QRadar
- **Threat Intelligence**: Integration with AlienVault OTX, MITRE ATT&CK, VirusTotal
- **Log Sources**: Configure which systems send logs to FortiSec

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Font**: Geist & Geist Mono

## Project Structure

```
fortisec-dashboard/
├── app/
│   ├── (dashboard)/
│   │   ├── analytics/        # Analytics dashboard with charts
│   │   ├── alerts/            # Alert management page
│   │   ├── systems/           # System inventory page
│   │   ├── users/             # User management page
│   │   ├── settings/          # Settings and configuration
│   │   └── layout.tsx         # Dashboard layout with sidebar
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Redirect to analytics
│   └── globals.css            # Global styles and theme
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── header.tsx             # Top navigation bar
│   ├── sidebar.tsx            # Side navigation menu
│   ├── stat-card.tsx          # Metric card component
│   └── theme-toggle.tsx       # Dark/light mode toggle
├── lib/
│   ├── mock-data.ts           # Mock data (50 alerts, 20 systems, 50 users)
│   ├── utils-data.ts          # Data filtering and formatting utilities
│   └── utils.ts               # General utility functions
└── README.md                  # This file
```

## Mock Data

The dashboard includes realistic mock data for demonstration:
- **50 security alerts** spanning various severity levels and types
- **20 systems** with different operating systems and compliance statuses
- **50 user accounts** with varying roles and MFA configurations
- **30 days of login attempt data** for trend analysis
- **Attack vector distribution** across 6 categories
- **Geographic access data** from 6 countries

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Download the project ZIP from v0
2. Extract to your desired location
3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will automatically redirect to `/analytics`.

### Build for Production

```bash
npm run build
npm start
```

## Design System

### Color Palette
- **Primary**: Blue-purple accent (265° hue)
- **Success**: Green for compliant/resolved states
- **Warning**: Yellow for medium severity/partial compliance
- **Destructive**: Red for high severity/non-compliant states
- **Neutral**: Dark backgrounds with light text (dark mode default)

### Typography
- **Headings**: Geist font family
- **Body**: Geist font family
- **Code/Monospace**: Geist Mono

### Theme
- **Default Mode**: Dark (optimized for SOC environments)
- **Light Mode**: Available via theme toggle in header
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop

## Future Enhancements

This dashboard is built with mock data and is ready for backend integration:
- Connect to real security monitoring tools (SIEM, IDS/IPS)
- Implement authentication with role-based access control
- Add real-time WebSocket updates for live alerts
- Integrate with ticketing systems (Jira, ServiceNow)
- Expand compliance framework coverage
- Add custom report generation
- Implement alert correlation and threat hunting features

## Use Cases

- **Security Operations Centers (SOC)**: Real-time threat monitoring and incident response
- **DevSecOps Teams**: Track security posture across development and production environments
- **IT Security Managers**: Compliance reporting and executive dashboards
- **System Administrators**: Server inventory and patch management
- **Compliance Officers**: Framework-specific compliance monitoring

## License

MIT License - Free to use for personal and commercial projects

## Acknowledgments

Built with ❤️ for the security community and v0 by Vercel using Next.js, shadcn/ui, and Recharts. Designed for enterprise security operations with a focus on usability, performance, and scalability.


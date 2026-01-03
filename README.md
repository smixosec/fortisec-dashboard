# 🛡️ FortiSec Dashboard

<div align="center">

![FortiSec Banner](https://img.shields.io/badge/FortiSec-Security_Operations_Center-blueviolet?style=for-the-badge&logo=shield)

**Enterprise-Grade Security Operations Center Dashboard**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)
[![SOC Ready](https://img.shields.io/badge/SOC-Ready-red?style=flat)](https://v0-security-operations-dashboard-iota.vercel.app)

[🚀 Live Demo](https://v0-security-operations-dashboard-iota.vercel.app) • [📖 Documentation](#documentation) • [🐛 Report Bug](../../issues) • [✨ Request Feature](../../issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Use Cases](#-use-cases)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

FortiSec Dashboard is a production-ready SOC (Security Operations Center) dashboard designed for modern security teams. It provides real-time monitoring of security alerts, system inventory, user management, and compliance metrics in a sleek, intuitive interface.

Built with enterprise-grade technologies, FortiSec delivers the performance and reliability demanded by security professionals while maintaining an exceptional user experience.

### Why FortiSec?

- ✅ **Real-time Monitoring**: Track security incidents as they happen
- ✅ **Compliance-First**: Built-in support for ISO 27001, NIST CSF, CIS Controls, and more
- ✅ **Enterprise Ready**: Scalable architecture designed for large security operations
- ✅ **Beautiful UI**: Modern, dark-mode-optimized interface perfect for SOC environments
- ✅ **Fully Responsive**: Works seamlessly across desktop, tablet, and mobile devices
- ✅ **Type-Safe**: 100% TypeScript for reliability and maintainability

---

## 🌟 Key Features

### 📊 Analytics Dashboard
- Real-time security metrics with live updates
- Interactive charts powered by Recharts
- 30-day login attempt trends
- Attack vector distribution analysis
- Severity-based threat categorization
- Geographic access tracking
- Compliance scoring with framework breakdowns

### 🚨 Alert Management
- Comprehensive alert log with advanced filtering
- Multi-level severity indicators (High, Medium, Low)
- Status tracking (Open, Investigating, Resolved)
- Search functionality across all alert fields
- CSV export for external analysis
- Color-coded visual indicators

### 💻 System Inventory
- Complete server monitoring and tracking
- OS and kernel version management
- Patch level compliance tracking
- Hardening status indicators
- IP address and network information
- Last scan timestamps

### 👥 User Management
- Role-based access control (Admin, Analyst, Viewer)
- MFA adoption tracking
- Last login activity monitoring
- User status management
- Active/inactive account tracking
- Security posture overview

### ⚙️ Settings & Configuration
- Configurable alert thresholds
- Auto-resolution policies
- Multi-channel notifications (Email, Slack, Teams, PagerDuty)
- Compliance framework toggles
- Log retention policies
- SIEM integration support
- Threat intelligence feeds

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg" width="48" height="48" alt="Next.js" />
      <br>Next.js 15
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" width="48" height="48" alt="Tailwind" />
      <br>Tailwind v4
    </td>
    <td align="center" width="96">
      <img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" width="48" height="48" alt="shadcn/ui" />
      <br>shadcn/ui
    </td>
    <td align="center" width="96">
      <img src="https://avatars.githubusercontent.com/u/6412038?s=200&v=4" width="48" height="48" alt="Recharts" />
      <br>Recharts
    </td>
  </tr>
</table>

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Geist & Geist Mono

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/smixosec/fortisec-dashboard.git
   cd fortisec-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

### Docker Deployment (Optional)

```bash
# Build the Docker image
docker build -t fortisec-dashboard .

# Run the container
docker run -p 3000:3000 fortisec-dashboard
```

---

## 📁 Project Structure

```
fortisec-dashboard/
├── app/                        # Next.js 15 App Router
│   ├── (dashboard)/           # Dashboard routes group
│   │   ├── analytics/         # Analytics dashboard
│   │   ├── alerts/            # Alert management
│   │   ├── systems/           # System inventory
│   │   ├── users/             # User management
│   │   ├── settings/          # Configuration
│   │   └── layout.tsx         # Dashboard layout with sidebar
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Redirect to /analytics
│   └── globals.css            # Global styles & theme
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   └── ...
│   ├── header.tsx             # Top navigation
│   ├── sidebar.tsx            # Side navigation
│   ├── stat-card.tsx          # Metric cards
│   └── theme-toggle.tsx       # Dark/light toggle
├── lib/
│   ├── mock-data.ts           # Demo data
│   ├── utils-data.ts          # Data utilities
│   └── utils.ts               # Helper functions
├── public/                    # Static assets
├── styles/                    # Additional styles
└── README.md                  # You are here
```

---

## 📸 Screenshots

### Analytics Dashboard
![Analytics Dashboard](https://via.placeholder.com/800x450/1e293b/ffffff?text=Analytics+Dashboard+Preview)

### Alert Management
![Alert Management](https://via.placeholder.com/800x450/1e293b/ffffff?text=Alert+Management+Preview)

### System Inventory
![System Inventory](https://via.placeholder.com/800x450/1e293b/ffffff?text=System+Inventory+Preview)

---

## 💼 Use Cases

FortiSec Dashboard is perfect for:

| Role | Use Case |
|------|----------|
| 🎯 **SOC Analysts** | Real-time threat monitoring and incident response |
| 🔐 **Security Engineers** | System hardening and compliance tracking |
| 👨‍💼 **IT Managers** | Executive dashboards and security posture reporting |
| 📊 **Compliance Officers** | Framework-specific compliance monitoring and reporting |
| ⚙️ **DevSecOps Teams** | Security integration across development pipelines |
| 🖥️ **System Administrators** | Server inventory and patch management |

---

## 🗺️ Roadmap

### Phase 1: Core Enhancements ✅
- [x] Mock data implementation
- [x] Responsive design
- [x] Dark mode support
- [x] Export functionality

### Phase 2: Backend Integration 🚧
- [ ] REST API integration
- [ ] WebSocket support for real-time updates
- [ ] User authentication (OAuth2/SAML)
- [ ] Role-based access control (RBAC)

### Phase 3: Advanced Features 📋
- [ ] Custom report generation
- [ ] Alert correlation engine
- [ ] Threat hunting capabilities
- [ ] Integration with SIEM platforms
- [ ] Machine learning anomaly detection
- [ ] Automated incident response workflows

### Phase 4: Enterprise Features 🎯
- [ ] Multi-tenancy support
- [ ] Advanced analytics with AI insights
- [ ] Custom dashboard builder
- [ ] API for third-party integrations
- [ ] Advanced audit logging
- [ ] Compliance report automation

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Write clean, type-safe TypeScript code
- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) by Vercel
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons from [Lucide](https://lucide.dev/)
- Inspired by modern SOC environments and security best practices

---

## 📞 Support

Need help? We're here for you:

- 📧 **Email**: support@fortisec.dev
- 💬 **Discord**: [Join our community](https://discord.gg/fortisec)
- 🐛 **Issues**: [Report bugs](../../issues)
- 📖 **Docs**: [Read the documentation](https://docs.fortisec.dev)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by the FortiSec Team

[Website](https://fortisec.dev) • [Twitter](https://twitter.com/fortisec) • [LinkedIn](https://linkedin.com/company/fortisec)

</div>

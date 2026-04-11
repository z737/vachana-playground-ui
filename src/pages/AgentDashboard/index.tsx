import {
  BarChart2, Phone, User, UserCheck, ChevronDown,
  Grid3x3, Expand, MoreVertical, SlidersHorizontal,
  Calendar, Download, TrendingUp, Clock, Search, Upload, Palette
} from 'lucide-react'
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell,
} from 'recharts'
import AuraLogo from '../../assets/Aura Logo.png'
import IconRail from '../../components/IconRail'
import NavSidebar from '../../components/NavSidebar'
import { useTheme } from '../../context/ThemeContext'

const navItems = [
  { icon: <BarChart2 size={16} strokeWidth={1.8} />, label: 'Dashboard', active: true },
  { icon: <Phone size={16} strokeWidth={1.8} />,     label: 'Calls' },
  { icon: <User size={16} strokeWidth={1.8} />,      label: 'Manage Agents' },
  { icon: <UserCheck size={16} strokeWidth={1.8} />, label: 'Manage QA' },
  { icon: <Phone size={16} strokeWidth={1.8} />,     label: 'Scorecard Forms' },
]

const trendData = [
  { date: '19/4', attempted: 42000, connected: 38000, notConnected: 18000 },
  { date: '24/4', attempted: 52000, connected: 40000, notConnected: 20000 },
  { date: '30/4', attempted: 61000, connected: 42000, notConnected: 22000 },
  { date: '5/5',  attempted: 72000, connected: 43000, notConnected: 26000 },
  { date: '10/5', attempted: 80000, connected: 42000, notConnected: 30000 },
  { date: '19/5', attempted: 95000, connected: 41000, notConnected: 38000 },
]

const donutData = [
  { name: 'Answered',    value: 23, color: '#16A34A' },
  { name: 'Busy',        value: 35, color: '#F79009' },
  { name: 'Failed',      value: 8,  color: '#EF4444' },
  { name: 'No Answered', value: 32, color: '#CBD5E1' },
]

function formatYAxis(val: number) {
  if (val >= 100000) return `${(val / 100000).toFixed(0)}L`
  if (val >= 1000)   return `${(val / 1000).toFixed(0)}K`
  return String(val)
}

export default function AgentDashboardPage() {
  const { setPanelOpen } = useTheme()

  return (
    <div className="layout">
      <IconRail logoSrc={AuraLogo} />
      <NavSidebar title="Human Analytics" items={navItems} />

      <div className="main-wrap">
        {/* Dashboard Header */}
        <div className="dash-header">
          <span className="dash-title">Stats</span>
          <div className="dash-header-actions">
            <div className="dash-search">
              <Search size={16} strokeWidth={1.8} />
              <input type="text" placeholder="Search" />
            </div>
            <button className="btn-import">
              <Upload size={16} strokeWidth={1.8} />
              Import Data
            </button>
            <button className="palette-btn" onClick={() => setPanelOpen(true)} aria-label="Theme playground">
              <Palette size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="dash-body">

          {/* Filter bar */}
          <div className="filter-bar">
            <div className="filter-left">
              <button className="filter-btn">
                <SlidersHorizontal size={14} strokeWidth={1.8} />
                Filters
              </button>
              <div className="btn-grp">
                <button className="btn-grp-item"><Calendar size={13} strokeWidth={1.8} /> Custom Date</button>
                <button className="btn-grp-item">12hr</button>
                <button className="btn-grp-item active">Today</button>
                <button className="btn-grp-item">Yesterday</button>
                <button className="btn-grp-item">7D</button>
                <button className="btn-grp-item">30D</button>
              </div>
              <button className="filter-btn">Daily <ChevronDown size={13} strokeWidth={1.8} /></button>
            </div>
            <button className="filter-icon-btn"><Download size={15} strokeWidth={1.8} /></button>
          </div>

          {/* Section tabs */}
          <div className="section-tabs">
            <div className="section-tab active">Overview</div>
          </div>

          {/* Overview row */}
          <div className="overview-row">

            {/* 2×2 Stat cards */}
            <div className="stat-cards-grid">
              {[
                { label: 'Base Allocation',         value: '4,45,255', pct: null },
                { label: 'Total Calls Connected',   value: '3,06,661', pct: '36.17%' },
                { label: 'Total Attempted',         value: '8,47,687', pct: null },
                { label: 'Not Connected Calls',     value: '5,41,026', pct: '63.80%' },
              ].map(card => (
                <div className="stat-card" key={card.label}>
                  <div className="stat-card-top">
                    <div className="stat-label-row">
                      <span className="stat-label">{card.label}</span>
                    </div>
                    <div className="stat-card-icons">
                      <Expand size={14} strokeWidth={1.8} />
                      <MoreVertical size={14} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="stat-number">
                    {card.value}
                    {card.pct && <span className="stat-pct"> {card.pct}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="bar-chart-card">
              {[
                { label: 'Base Allocation',  width: '100%', pct: '100%', value: '4,45,255' },
                { label: 'Unique Attempted', width: '75%',  pct: '67%',  value: '1,42,252' },
                { label: 'Unique Connected', width: '40%',  pct: '45%',  value: '1,28,313' },
              ].map(row => (
                <div className="bar-row" key={row.label}>
                  <span className="bar-label">{row.label}</span>
                  <div className="bar-track"><div className="bar-fill" style={{ width: row.width }} /></div>
                  <div className="bar-right">
                    <span className="bar-value">{row.value}</span>
                    {row.pct && <span className="bar-pct">{row.pct}</span>}
                  </div>
                </div>
              ))}
              <div className="bar-row">
                <button className="bar-dropdown">PTP, ONKT <ChevronDown size={12} strokeWidth={1.8} /></button>
                <div className="bar-track"><div className="bar-fill" style={{ width: '22%' }} /></div>
                <div className="bar-right">
                  <span className="bar-value">48,818</span>
                  <span className="bar-pct">11%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts row */}
          <div className="charts-row">

            {/* Line chart — Recharts */}
            <div className="chart-card">
              <div className="chart-header">
                <div className="chart-header-top">
                  <span className="chart-title">Total Calls Trend</span>
                  <button className="chart-icon-btn"><TrendingUp size={14} strokeWidth={1.8} /></button>
                </div>
                <div className="chart-legend">
                  <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--brand)' }} />Attempted</div>
                  <div className="legend-item"><span className="legend-dot" style={{ background: '#16A34A' }} />Connected</div>
                  <div className="legend-item"><span className="legend-dot" style={{ background: '#EF4444' }} />Not Connected</div>
                </div>
              </div>
              <div className="chart-body">
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={trendData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
                    <CartesianGrid vertical={false} stroke="currentColor" strokeOpacity={0.07} />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 10, fill: 'var(--text-label)', fontFamily: 'var(--font-mono)' }}
                      axisLine={false} tickLine={false}
                    />
                    <YAxis
                      tickFormatter={formatYAxis}
                      tick={{ fontSize: 10, fill: 'var(--text-label)', fontFamily: 'var(--font-mono)' }}
                      axisLine={false} tickLine={false} width={36}
                    />
                    <Tooltip
                      contentStyle={{
                        background: 'var(--bg-surface)', border: '1px solid var(--border-soft)',
                        borderRadius: 8, fontSize: 12, color: 'var(--text-primary)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      }}
                      formatter={(val: number) => val.toLocaleString()}
                    />
                    <Line dataKey="attempted"    stroke="var(--brand)"  strokeWidth={2} dot={false} />
                    <Line dataKey="connected"    stroke="#16A34A"       strokeWidth={2} dot={false} />
                    <Line dataKey="notConnected" stroke="#EF4444"       strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Donut chart — Recharts */}
            <div className="chart-card">
              <div className="chart-header">
                <div className="chart-header-top">
                  <span className="chart-title">Total Calls Connectivity Status</span>
                  <button className="chart-icon-btn"><Clock size={14} strokeWidth={1.8} /></button>
                </div>
              </div>
              <div className="chart-body">
                <div className="donut-wrap">
                  <div className="donut-svg-wrap">
                    <ResponsiveContainer width={260} height={260}>
                      <PieChart>
                        <Pie
                          data={donutData} cx="50%" cy="50%"
                          innerRadius={70} outerRadius={110}
                          dataKey="value" startAngle={90} endAngle={-270}
                          strokeWidth={0}
                        >
                          {donutData.map((d, i) => <Cell key={i} fill={d.color} />)}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            background: 'var(--bg-surface)', border: '1px solid var(--border-soft)',
                            borderRadius: 8, fontSize: 12, color: 'var(--text-primary)',
                          }}
                          formatter={(val: number) => `${val}%`}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="donut-labels">
                    {donutData.map(d => (
                      <div className="donut-label-item" key={d.name}>
                        <span className="donut-label-dot" style={{ background: d.color }} />
                        <span className="donut-label-text">{d.name}</span>
                        <span className="donut-label-pct">{d.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

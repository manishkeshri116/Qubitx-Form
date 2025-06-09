"use client"

import { ArrowDown, ArrowUp, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { cn } from "@/lib/utils"

const tabs = [
    { id: "supply", label: "Supply Metrics" },
    { id: "transaction", label: "Transaction Metrics" },
    { id: "partner", label: "Partner Metrics" },
]

export function MetricsTabs() {
    const [activeTab, setActiveTab] = useState("supply")

    return (
        <div className="flex rounded-md bg-zinc-900 p-1 w-full md:w-auto">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        activeTab === tab.id ? "bg-white text-black" : "text-zinc-400 hover:text-zinc-200",
                    )}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

interface MetricsCardProps {
    title: string
    value: string
    change: number
    changeText: string
    prefix?: string
    withLeftBorder?: boolean
}

export function MetricsCard({ title, value, change, changeText, prefix = "$" }: MetricsCardProps) {
    const isPositive = change >= 0

    return (
        <div className="bg-black p-6 flex-1">
            <h3 className="text-zinc-400 text-sm mb-2">{title}</h3>
            <p className="text-3xl text-white font-bold mb-2">{prefix}{value}</p>
            <div className="flex items-center">
                {isPositive ? (
                    <ArrowUp className="h-4 w-4 text-emerald-500 mr-1" />
                ) : (
                    <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={cn("text-sm font-medium", isPositive ? "text-emerald-500" : "text-red-500")}>
                    {isPositive && "+"}
                    {change}%
                </span>
                <span className="text-zinc-400 text-sm ml-1">{changeText}</span>
            </div>
        </div>
    )
}




export default function Dashboard() {
    return (
        <div className="flex flex-col  bg-black text-white">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <MetricsTabs />

                    <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                        <Select defaultValue="all-chains">
                            <SelectTrigger className="w-full md:w-[180px] bg-zinc-900 border-zinc-700 text-zinc-300">
                                <SelectValue placeholder="All Chains" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-zinc-700 text-zinc-300">
                                <SelectItem value="all-chains">All Chains</SelectItem>
                                <SelectItem value="ethereum">Ethereum</SelectItem>
                                <SelectItem value="polygon">Polygon</SelectItem>
                                <SelectItem value="arbitrum">Arbitrum</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select defaultValue="all-tokens">
                            <SelectTrigger className="w-full md:w-[180px] bg-zinc-900 border-zinc-700 text-zinc-300">
                                <SelectValue placeholder="All Tokens" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-zinc-700 text-zinc-300">
                                <SelectItem value="all-tokens">All Tokens</SelectItem>
                                <SelectItem value="usdvt">USDvt</SelectItem>
                                <SelectItem value="iusdvt">iUSDvt</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="relative w-full md:w-[300px] ">
                            <Search
                                className="absolute left-3 mt-3 -translate-y-1/2 text-zinc-400"
                                style={{ height: '16px', width: '16px' }}
                            />
                            <Input placeholder="Search..." className="pl-10 bg-white bg-zinc-900 border-zinc-700 text-zinc-300 w-full" />
                        </div>

                    </div>
                </div>

                <div className="border-t-2 border-b-2 border-white flex">
                    <MetricsCard
                        title="Total USDvt Supply"
                        value="245,465,000"
                        change={2.5}
                        changeText="compared to last month"
                    />

                    {/* Vertical divider after 1st item */}
                    <div className="hidden lg:block w-px bg-white my-6"></div>

                    <MetricsCard
                        title="Total iUSDvt Supply"
                        value="78,230,000"
                        change={12.3}
                        changeText="compared to last month"
                    />

                    {/* Vertical divider after 2nd item */}
                    <div className="hidden lg:block w-px bg-white my-6"></div>

                    <MetricsCard
                        title="Minted (24h)"
                        value="1,245,000"
                        change={18.2}
                        changeText="compared to yesterday"
                    />

                    {/* Vertical divider after 3rd item */}
                    <div className="hidden lg:block w-px bg-white my-6"></div>

                    <MetricsCard
                        title="Burned (24h)"
                        value="945,000"
                        change={-4.5}
                        changeText="compared to yesterday"
                        prefix=""
                    />
                </div>



            </div>
        </div>
    )
}

"use client"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, CheckCircle, Cpu } from "lucide-react"

export default function SystemStatus() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-gray-950 rounded-xl shadow-lg">
      <div className="space-y-2 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">System Status</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400">Current status of all systems</p>
      </div>

      <Separator className="my-6" />

      <div className="space-y-6">
        {/* Dfns MPC Infrastructure */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Card className="w-16 h-16 flex items-center justify-center">
              <Cpu className="h-8 w-8 text-gray-500" />
            </Card>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Dfns MPC Infrastructure</h2>
              <p className="text-gray-500">Last checked: 2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Normal</span>
          </div>
        </div>

        {/* Ethereum Network */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Card className="w-16 h-16 flex items-center justify-center">
              <Cpu className="h-8 w-8 text-gray-500" />
            </Card>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Ethereum Network</h2>
              <p className="text-gray-500">Last checked: 5 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Normal</span>
          </div>
        </div>

        {/* Arbitrum Network */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Card className="w-16 h-16 flex items-center justify-center">
                <Cpu className="h-8 w-8 text-gray-500" />
              </Card>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Arbitrum Network</h2>
                <p className="text-gray-500">Last checked: 1 minute ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">Error</span>
            </div>
          </div>
          <p className="ml-20 text-amber-500">Higher than normal confirmation times</p>
        </div>

        {/* Solana Network */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Card className="w-16 h-16 flex items-center justify-center">
              <Cpu className="h-8 w-8 text-gray-500" />
            </Card>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Solana Network</h2>
              <p className="text-gray-500">Last checked: 4 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Normal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

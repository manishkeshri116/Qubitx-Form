import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpRight, ArrowDownRight, ArrowRight } from "lucide-react"

export default function ActivityFeed() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-sm">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Recent Activity</h1>
          <p className="text-xl text-gray-500 mt-1">
            Latest actions taken by administrators
          </p>
        </div>

        <div className="h-px bg-gray-200 my-6"></div>

        <div>
          <h2 className="text-gray-500 font-medium mb-6">TODAY</h2>

          <div className="space-y-12 relative">
            {/* Transaction 1 */}
            <div className="relative">
              {/* Vertical line for next item */}
              <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-300 z-0" />

              {/* Icon */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center z-10">
                <ArrowUpRight className="h-5 w-5 text-blue-600" />
              </div>

              <div className="ml-20 flex items-center">
                <Avatar className="h-12 w-12 border-2 border-gray-100">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>

                <div className="ml-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xl font-medium">John D.</span>
                    <span className="text-xl text-gray-500">Minted</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xl font-medium">
                      $250,000 USDvt
                    </span>
                    <span className="text-xl text-gray-500">from</span>
                    <span className="text-xl">Ethereum</span>
                  </div>
                  <p className="text-gray-500 text-lg mt-1">10 mins</p>
                </div>
              </div>
            </div>

            {/* Transaction 2 */}
            <div className="relative">
              {/* Vertical line for next item */}
              <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-300 z-0" />

              <div className="absolute left-0 top-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center z-10">
                <ArrowRight className="h-5 w-5 text-green-600" />
              </div>

              <div className="ml-20 flex items-center">
                <Avatar className="h-12 w-12 border-2 border-gray-100">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>

                <div className="ml-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xl font-medium">Sarah M.</span>
                    <span className="text-xl text-gray-500">Transfered</span>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xl font-medium">
                      $75,000 iUSDvt
                    </span>
                    <span className="text-xl text-gray-500">from</span>
                    <span className="text-xl">Solana</span>
                  </div>
                  <p className="text-gray-500 text-lg mt-1">10 mins</p>
                </div>
              </div>
            </div>

            {/* Transaction 3 */}
            <div className="relative">
              {/* No vertical line after last item */}

              <div className="absolute left-0 top-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center z-10">
                <ArrowDownRight className="h-5 w-5 text-red-600" />
              </div>

              <div className="ml-20 flex items-center">
                <Avatar className="h-12 w-12 border-2 border-gray-100">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>

                <div className="ml-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xl font-medium">Robert K.</span>
                    <span className="text-xl text-gray-500">Burned</span>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xl font-medium">
                      $120,000 USDvt
                    </span>
                    <span className="text-xl text-gray-500">from</span>
                    <span className="text-xl">Base</span>
                  </div>
                  <p className="text-gray-500 text-lg mt-1">10 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

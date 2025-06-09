import React, { ReactNode } from 'react';
import {
    Clock,
    XCircle,
    CheckCircle,
    ArrowUp,
    ArrowDown,
    Coins,
    DollarSign,
    IndianRupee,
    Bitcoin,
} from 'lucide-react';
import { Button } from '../ui/button';

type StatusType = 'pending' | 'failed' | 'confirmed';

interface Item {
    id: number;
    name: string;
    status: StatusType;
    amount: number;
    coins: string;
}

const mockItems: Item[] = [
    { id: 1, name: 'Payment to John', status: 'pending', amount: +2000, coins: "Etherum" },
    { id: 2, name: 'Refund from Mike', status: 'failed', amount: -200, coins: "Solona" },
    { id: 3, name: 'Subscription Renewed', status: 'confirmed', amount: -500, coins: "Base" },
    { id: 4, name: 'Order #4123', status: 'pending', amount: +1000, coins: "Doge" },
];

const coinsItem: Record<string, ReactNode> = {
    Ethereum: <Coins size={14} />,
    Solana: <DollarSign size={14} />,
    Base: <IndianRupee size={14} />,
    Doge: <Coins size={14} />,
    Bitcoin: <Bitcoin size={14} />,
}


const statusMap: Record<
    StatusType,
    { icon: ReactNode; colorClass: string; label: string }
> = {
    pending: {
        icon: <Clock size={18} />,
        colorClass: 'text-yellow-600',
        label: 'Pending',
    },
    failed: {
        icon: <XCircle size={18} />,
        colorClass: 'text-red-600',
        label: 'Failed',
    },
    confirmed: {
        icon: <CheckCircle size={18} />,
        colorClass: 'text-green-600',
        label: 'Confirmed',
    },
};

export const StatusBar = () => {

    return (
        <div className="max-w-md mx-auto mt-10 border rounded shadow">
            <h1 className="text-xl font-bold p-4">Transaction Status</h1>
            {mockItems.map((item) => {
                const { icon, colorClass, label } = statusMap[item.status];

                return (
                    <div
                        key={item.id}
                        className="flex  flex-col gap-4 justify-between border-b  py-2 px-4"
                    >
                        <span>{item.name}</span>
                        <span className={`flex items-center gap-2 ${colorClass}`}>
                            {icon}
                            <span>{label}</span>
                        </span>
                        <span className="flex items-center ml-4">
                            {item.amount >= 0 ? (
                                <>
                                    <ArrowUp className="text-green-500 mr-1" size={16} />
                                    <span className="text-green-500">+{item.amount}</span>
                                </>
                            ) : (
                                <>
                                    <ArrowDown className="text-red-500 mr-1" size={16} />
                                    <span className="text-red-500">-{Math.abs(item.amount)}</span>
                                </>
                            )}
                        </span>
                        <Button variant="outline" size="sm">
                            {coinsItem[item.coins]}
                            {item.coins}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};
// Configuration des outils d'analytics de manière SEO-friendly
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Google Analytics - version simplifiée pour éviter les erreurs TypeScript
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && GA_TRACKING_ID) {
        // @ts-ignore - gtag sera chargé dynamiquement
        if (window.gtag) {
            window.gtag('config', GA_TRACKING_ID, {
                page_location: url,
            })
        }
    }
}

export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string
    category: string
    label?: string
    value?: number
}) => {
    if (typeof window !== 'undefined' && GA_TRACKING_ID) {
        // @ts-ignore - gtag sera chargé dynamiquement
        if (window.gtag) {
            window.gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value,
            })
        }
    }
}

// Hook pour tracker automatiquement les changements de page
export function useAnalytics() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
        pageview(url)
    }, [pathname, searchParams])
}

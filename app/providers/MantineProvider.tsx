'use client'
import { MantineProvider as OrgMantineProvider } from '@mantine/core'
import React from 'react'

export default function MantineProvider({ children }: { children: React.ReactNode }) {
  return <OrgMantineProvider withGlobalStyles withNormalizeCSS>{children}</OrgMantineProvider>
}
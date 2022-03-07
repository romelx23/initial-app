import React from 'react'
import Link from "next/link";
import { MainLayout } from '../../components/layouts/MainLayout'

export default function pricing() {
  return (
    <MainLayout>
        <h2>Pricing Page</h2>
        <h1 className="title">
          ir a <Link href="/">Home</Link>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/index.js</code>
        </p>
    </MainLayout>
  )
}

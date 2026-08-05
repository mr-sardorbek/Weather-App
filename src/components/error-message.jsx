import { AlertTriangle } from 'lucide-react'
import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className="rounded-3xl border border-red-400/30 bg-white/20 p-8 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col items-center gap-5 py-8">
        <AlertTriangle className="h-14 w-14 text-red-400" />

        <h2 className="text-2xl font-bold text-white">
          Oops!
        </h2>

        <p className="text-center text-white/80">
          {message}
        </p>
      </div>
    </div>
  )
}

export default ErrorMessage

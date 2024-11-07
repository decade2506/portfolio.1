import { QrCode, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ActionButtons() {
  return (
    <div className="flex gap-4 justify-center my-8">
      <Button className="bg-[#E15B4E] hover:bg-[#d14d40] text-white gap-2">
        <MapPin className="h-5 w-5" />
        Quanh đây
      </Button>
      <Button variant="outline" className="gap-2">
        <QrCode className="h-5 w-5" />
        Scan QR
      </Button>
    </div>
  )
}

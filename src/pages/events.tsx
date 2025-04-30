import { TimelineLayout } from "@/components/ui/timeline/timeline-layout"
import { events } from "@/data/events"
import { CalendarIcon } from "lucide-react"

const Events = () => {
  return (
    <section className="py-10">
      <div>
        <h2 className="my-6 font-bold text-pretty mb-10 items-center text-center">
          EVENTS
        </h2>
        <TimelineLayout items={events} size="lg" iconColor="primary" customIcon={<CalendarIcon />} />
      </div>
    </section>
  )
}

export default Events
import { cn } from "@/lib/utils"
import { Slider } from "@/shared/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export const Settings = ({ className, ...props }: SliderProps) => {
  return (
    <>
      <section className="w-92 flex flex-col gap-4">
        <div>
          <p>Focus duration</p>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", className)}
            {...props}
          />        
        </div>
        <div>
          <p>Short break duration</p>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", className)}
            {...props}
          />  
        </div>
        <div>
          <p>Long break duration</p>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", className)}
            {...props}
          />  
        </div>
        <div>
          <p>Focus intervals</p>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", className)}
            {...props}
          />  
        </div>
      </section>
    </>
  )
}
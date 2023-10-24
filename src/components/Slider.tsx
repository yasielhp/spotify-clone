import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'clsx'

export const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn('group relative flex touch-none select-none items-center', className)}
		{...props}
	>
		<SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800">
			<SliderPrimitive.Range className="absolute h-full bg-white group-hover:bg-green-400" />
		</SliderPrimitive.Track>

		<SliderPrimitive.Thumb className="border-primary bg-background ring-offset-background focus-visible:ring-ring hidden h-3 w-3 rounded-full border-2 bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-hover:block" />
	</SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName

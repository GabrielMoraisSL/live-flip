export const ProgressBar = ({ percent }: { percent: number }) => {
  return (
    <div className='w-full h-1 bg-neutral-700 rounded'>
      <div
        className='h-full bg-brand-primary rounded transition-all duration-500'
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
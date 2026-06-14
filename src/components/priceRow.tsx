const PriceRow = ({
  item,
  checked,
  onToggle,
}: {
  item: Item
  checked: boolean
  onToggle: () => void
}) => {
  return (
    <li className="group flex items-center justify-between gap-4 border-b border-[#e8e2d6] py-3 transition hover:bg-[#fcfbf7]">
      <label className="flex flex-1 cursor-pointer items-center gap-4 text-sm text-[#2c2520]">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="h-4 w-4 accent-[#b08d5b]"
        />
        <span>{item.name}</span>
      </label>
      <span className="hidden flex-1 border-b border-dotted border-[#c5a880]/40 sm:block" />
      <span className="whitespace-nowrap font-serif text-base text-[#b08d5b]">{item.price}</span>
    </li>
  )
}

export default PriceRow

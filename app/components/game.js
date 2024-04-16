
export default function Game({ thumb, title, salePrice, normalPrice, steamRatingPercent }) {
  return (
      <li className="flex items-center bg-pp-card p-2 rounded-md overflow-clip shadow-2xl hover:bg-pp-hover hover:ring">
          <img src={thumb} alt={title} className="mx-2 rounded-md max-h-28 min-h-12 shadow-2xl" />
          <div className="mx-auto my-auto flex-grow text-right pr-2">
            <h2 className="text-sm font-black ">{title}</h2>
            <div className="mt-1">
              <p className="text-xs text-amber-300">Sale Price: {salePrice}</p>
              <p className="text-xs">Normal Price: {normalPrice}</p>
              <p className="text-xs">Steam Rating: {steamRatingPercent}%</p>
            </div>
          </div>
      </li>
  )
}
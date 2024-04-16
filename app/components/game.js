
export default function Game({ thumb, title, salePrice, normalPrice, steamRatingPercent }) {
  return (
      <li className="flex items-center bg-pp-card p-2 rounded-md overflow-auto shadow-2xl hover:bg-pp-hover hover:ring">
          <img src={thumb} alt={title} className="rounded-md max-h-24 min-h-12 shadow-2xl" />
          <div className="mx-auto my-auto flex-grow text-right pr-2">
            <h2 className="text-sm font-black">{title}</h2>
            <p className="text-sm">Sale Price: {salePrice}</p>
            <p className="text-sm">Normal Price: {normalPrice}</p>
            <p className="text-sm">Steam Rating: {steamRatingPercent}%</p>
          </div>
      </li>
  )
}
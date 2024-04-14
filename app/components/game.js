
export default function Game({ thumb, title, salePrice, normalPrice, steamRatingPercent }) {
  return (
      <li className="bg-cyan-800 mb-3 p-2.5 max-w-40 rounded-lg">
          <img src={thumb} alt={title} className="rounded-sm max-h-40 min-h-36" />
          <h2 className="pl-2 text-lg font-black">{title}</h2>
          <div className="botto">
            <p className="pl-1 text-sm">Sale Price: {salePrice}</p>
            <p className="pl-1 text-sm">Normal Price: {normalPrice}</p>
            <p className="pl-1 text-sm">Steam Rating: {steamRatingPercent}%</p>
          </div>
      </li>
  )
}
import { constants } from "@/lib/constants"
import { Link } from "@tanstack/react-router"

export const AppSidebar = () => {
  return (
    <aside className="p-2">
      <ul>
        {
          constants.menuItems.map((item) => (
            <li>
              <Link to={ item.path } className="[&.active]:font-bold">
                { item.label }
              </Link>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}
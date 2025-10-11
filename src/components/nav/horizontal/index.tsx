import { cn } from "@/utils";
import type { NavProps } from "../types";
import { NavGroup } from "./nav-group";

export function NavHorizontal({ data, className, ...props }: NavProps) {
	return (
		<nav
			className={cn(
				"flex items-center gap-1 min-h-[var(--layout-nav-height-horizontal)] border-b border-dashed",
				className,
			)}
			{...props}
		>
			{data.map((group, index) => (
				<NavGroup key={group.name || index} name={group.name} items={group.items} />
			))}
		</nav>
	);
}

import { cn } from "@/utils";
import { NavLink } from "react-router";
import { Icon } from "../icon";

interface Props {
	size?: number | string;
	className?: string;
}
function Logo({ size = 50, className }: Props) {
	return (
		<NavLink to="/" className={cn(className)}>
			<Icon icon="local:ic-logo-badge" size={size} color="var(--colors-palette-primary-default)" />
		</NavLink>
	);
}

export default Logo;

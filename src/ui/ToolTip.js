import { useEffect } from 'react';
import './ToolTip.scss';

export default function ToolTip({ children, active, remove }) {
    useEffect(() => active && setTimeout(remove, 3000), [active]);
    return (
        <div className={active ? 'tooltip on' : 'tooltip off'}>{children}</div>
    );
}
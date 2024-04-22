import { ReactNode } from "react";

interface IInfoBox {
    mode: 'hint' | 'warning';
    children: ReactNode;
}

const InfoBox = ({ mode, children }: IInfoBox) => {
    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        );
    }

    return (
        <aside className="infobox infobox-warning warning--medium">
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
}

export default InfoBox;
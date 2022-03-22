import { createClientsHeader } from "./createHeader.js";
import { createClientSection } from "./createClientsSection.js";

const createApp = () => {
    const header = createClientsHeader();
    const clientSection = createClientSection();
    document.body.append(header, clientSection.main);
};

createApp();

const books = [
    {
        id: 1,
        title: "Neuromancer",
        author: "William Gibson",
        published: "1984",
        description: `
            <p>Neuromancer is a seminal cyberpunk novel that follows Case, a washed-up computer hacker, on a high-stakes mission involving artificial intelligence and cyberspace. It defined the cyberpunk genre and introduced the concept of the Matrix.</p>
        `,
        coverImage: "https://archive.org/download/neuromancer00gibs_0/page/cover_w180_h360.jpg"
    },
    {
        id: 2,
        title: "Snow Crash",
        author: "Neal Stephenson",
        published: "1992",
        description: `
            <p>Set in a near-future dystopia, Snow Crash follows Hiro Protagonist as he uncovers a virtual reality virus threatening both the Metaverse and the real world. A sharp, satirical take on cyberpunk tropes.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/14811992-M.jpg"
    },
    {
        id: 3,
        title: "Do Androids Dream of Electric Sheep?",
        author: "Philip K. Dick",
        published: "1968",
        description: `
            <p>This novel inspired the Blade Runner film and explores themes of identity, empathy, and humanity through the story of Rick Deckard, a bounty hunter tasked with retiring rogue androids.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/13681045-M.jpg"
    },
    {
        id: 4,
        title: "Altered Carbon",
        author: "Richard K. Morgan",
        published: "2002",
        description: `
            <p>In a world where consciousness can be transferred between bodies, Takeshi Kovacs, a former soldier, investigates a wealthy man's alleged suicide in this gritty cyberpunk noir.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/210812-L.jpg"
    },
    {
        id: 5,
        title: "Count Zero",
        author: "William Gibson",
        published: "1986",
        description: `
            <p>The second book in Gibson's Sprawl trilogy, Count Zero, delves deeper into the cyberpunk world, featuring three interwoven stories involving cyberspace, AI, and corporate espionage.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/6643951-M.jpg"
    },
    {
        id: 6,
        title: "Mona Lisa Overdrive",
        author: "William Gibson",
        published: "1988",
        description: `
            <p>The final book in the Sprawl trilogy, Mona Lisa Overdrive, ties together characters and themes from previous novels, exploring AI consciousness and cyberspace's evolving nature.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/369068-M.jpg"
    },
    {
        id: 7,
        title: "The Peripheral",
        author: "William Gibson",
        published: "2014",
        description: `
            <p>A gripping novel that combines virtual reality and time travel, The Peripheral explores the collision between two different futures and the unintended consequences of technology.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/12678170-M.jpg"
    },
    {
        id: 8,
        title: "Hardwired",
        author: "Walter Jon Williams",
        published: "1986",
        description: `
            <p>A classic cyberpunk novel about Earth after a devastating war. Cowboys and couriers navigate a corporate-controlled world where human-machine interfaces are the norm.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/8012078-M.jpg"
    },
    {
        id: 9,
        title: "Schismatrix Plus",
        author: "Bruce Sterling",
        published: "1985",
        description: `
            <p>Schismatrix Plus explores a future dominated by post-human politics and biotechnology, combining cyberpunk with a broader focus on interstellar expansion and evolution.</p>
        `,
        coverImage: "https://covers.openlibrary.org/w/id/283594-M.jpg"
    },
    {
        id: 10,
        title: "Mirrorshades: The Cyberpunk Anthology",
        author: "Bruce Sterling (Editor)",
        published: "1986",
        description: `
            <p>This anthology features stories from some of the biggest names in cyberpunk, offering a diverse exploration of the genre's core themes of technology, rebellion, and dystopia.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/284565-M.jpg"
    },
    {
        id: 11,
        title: "Trouble and Her Friends",
        author: "Melissa Scott",
        published: "1994",
        description: `
            <p>This novel explores a cyberpunk world from a queer perspective, following Trouble and Cerise as they navigate a web of intrigue in the Net's criminal underworld.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/6655699-M.jpg"
    },
    {
        id: 12,
        title: "Rimrunners",
        author: "C. J. Cherryh",
        published: "1989",
        description: `
            <p>A space opera with cyberpunk influences, Rimrunners follows a fugitive seeking refuge aboard a spaceship, blending themes of survival, trust, and technology.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/8009724-M.jpg"
    },
    {
        id: 13,
        title: "Burning Chrome",
        author: "William Gibson",
        published: "1986",
        description: `
            <p>A short story collection that includes some of Gibson's best cyberpunk tales, including the titular "Burning Chrome," which introduced cyberspace to the genre.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/8538817-M.jpg"
    },
    {
        id: 14,
        title: "Metrophage",
        author: "Richard Kadrey",
        published: "1988",
        description: `
            <p>A gritty tale of a drug dealer navigating a decaying Los Angeles, Metrophage is a hard-hitting cyberpunk novel with a noir aesthetic.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/13738239-M.jpg"
    },
    {
        id: 15,
        title: "Virtual Light",
        author: "William Gibson",
        published: "1993",
        description: `
            <p>The first book in the Bridge trilogy, Virtual Light blends cyberpunk with a crime thriller as it follows the theft of a pair of high-tech sunglasses containing sensitive information.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/11739637-M.jpg"
    },
    {
        id: 16,
        title: "The Diamond Age",
        author: "Neal Stephenson",
        published: "1995",
        description: `
            <p>A richly layered story set in a post-cyberpunk world where nanotechnology reigns supreme, The Diamond Age follows Nell, a young girl, as she discovers a mysterious interactive book.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/852389-M.jpg"
    },
    {
        id: 17,
        title: "Noir",
        author: "K. W. Jeter",
        published: "1998",
        description: `
            <p>A dark and twisted cyberpunk tale set in a futuristic Los Angeles, Noir delves into themes of corporate control and human augmentation.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/373896-M.jpg"
    },
    {
        id: 18,
        title: "When Gravity Fails",
        author: "George Alec Effinger",
        published: "1986",
        description: `
            <p>Set in a Middle Eastern-inspired cyberpunk future, this novel follows Marîd Audran, a fixer who becomes embroiled in a high-tech murder mystery.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/6992030-M.jpg"
    },
    {
        id: 19,
        title: "Synners",
        author: "Pat Cadigan",
        published: "1991",
        description: `
            <p>Synners explores the merging of human consciousness with cyberspace, offering a thought-provoking look at the potential dangers of technology.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/6635519-M.jpg"
    },
    {
        id: 20,
        title: "Software",
        author: "Rudy Rucker",
        published: "1982",
        description: `
            <p>The first book in the Ware Tetralogy, Software combines cyberpunk with philosophical musings on artificial intelligence and humanity.</p>
        `,
        coverImage: "https://covers.openlibrary.org/b/id/6922745-M.jpg"
    }
];

module.exports = books
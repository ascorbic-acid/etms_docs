// https://github.com/ascorbic-acid/etms_docs
export default defineAppConfig({
  docus: {
    title: 'Ebkar Technology Knowledge Base Documentations',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'nuxt_js',
      github: 'ascorbic-acid/etms_docs',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'etms_docs',
      owner: 'ascorbic-acid',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        text: "Nuxt + Docus is Love"
      }
    }
  }
})

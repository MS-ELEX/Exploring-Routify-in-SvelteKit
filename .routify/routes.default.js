

export default {
  "meta": {},
  "id": "_default",
  "file": {
    "path": "src/pages",
    "dir": "src",
    "base": "pages",
    "ext": "",
    "name": "pages"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_a",
      "name": "a",
      "module": false,
      "file": {
        "path": "src/pages/a",
        "dir": "src/pages",
        "base": "a",
        "ext": "",
        "name": "a"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_a_page_svelte",
          "name": "page",
          "module": () => import('../src/pages/a/page.svelte'),
          "file": {
            "path": "src/pages/a/page.svelte",
            "dir": "src/pages/a",
            "base": "page.svelte",
            "ext": ".svelte",
            "name": "page"
          },
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "name": "index",
      "module": () => import('../src/pages/index.svelte'),
      "file": {
        "path": "src/pages/index.svelte",
        "dir": "src/pages",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "children": []
    }
  ]
}
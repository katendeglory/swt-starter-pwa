import { writable } from 'svelte/store'

const foo = writable({ foo: "foo" });

export default foo;
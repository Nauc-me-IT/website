import { validateEmail } from "./utils"

test("validateEmail returns false for non-emails", () => {
  ;(expect as any)(validateEmail(undefined)).toBe(false)
  ;(expect as any)(validateEmail(null)).toBe(false)
  ;(expect as any)(validateEmail("")).toBe(false)
  ;(expect as any)(validateEmail("not-an-email")).toBe(false)
  ;(expect as any)(validateEmail("n@")).toBe(false)
})

test("validateEmail returns true for emails", () => {
  ;(expect as any)(validateEmail("kody@example.com")).toBe(true)
})

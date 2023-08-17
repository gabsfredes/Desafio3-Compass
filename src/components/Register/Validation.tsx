export function validateUsername(username: string): string | null {
  if (username.length < 3) {
    return "Username must have at least 3 characters";
  }

  if (!username) {
    return "Username is required";
  }
  return null;
}

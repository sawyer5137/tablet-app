import open from "open";
import { getProcessId, killProcessById } from "./utils.js";
import keySender from "node-key-sender";
import clippy from "clipboardy";

// opens and closes a specified program
export async function toggleProgram(program) {
  const pid = await getProcessId(`${program}.exe`);
  if (pid) {
    killProcessById(Number(pid));
  } else {
    open(`${program}://`);
  }
}

//opens and closes a steam game
export async function toggleSteamGame(gameName, gameId) {
  const pid = await getProcessId(`${gameName}.exe`);
  if (pid) {
    killProcessById(Number(pid));
  } else {
    open(`steam://launch/${gameId}`);
  }
}

//writes to clipboard then pastes text. effectively types some text
export function pasteText(text) {
  clippy.write(text);
  keySender.sendCombination(["control", "v"]);
}

export function openURL(url, program) {
  open(url, { app: program });
}

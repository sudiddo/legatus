import html2canvas from "html2canvas";
import constants from "./constants";

/* 
  This function converts a div element into an image element.
  The div element is passed in as a ref to the function.
  The function uses html2canvas to convert the div element into a canvas element.
  The function then converts the canvas element into an image element.
*/
async function convertDivToImage(
  ref: React.RefObject<HTMLDivElement>
): Promise<HTMLImageElement> {
  // Step 1: Check if the ref is not null

  if (!ref.current) {
    throw new Error("Div element ref is null");
  }
  // Step 2: Convert the div to a canvas
  const canvas = await html2canvas(ref.current, { useCORS: true });

  // Step 3: Convert the canvas to an image
  const img = new Image();
  img.src = canvas.toDataURL();
  return img;
}

/* 
  Copy an image to the clipboard as a blob
  img: Element containing image to copy
  Returns true on success, false on failure
*/
async function copyImageToClipboard(img: HTMLImageElement) {
  // Fetch the image as a blob
  const blob = await fetch(img.src).then((r) => r.blob());
  // Create a new ClipboardItem containing the blob
  const item = new ClipboardItem({ [blob.type]: blob });
  // Write the ClipboardItem to the clipboard
  await navigator.clipboard.write([item]);
  return true;
}

/*
  Ask the user if they want to grant permission to access the
  clipboard. If the user grants permission, the promise will
  resolve to a PermissionStatus object that contains the state
  of the permission. If the user denies permission or the
  permission request fails, the promise will reject.
*/
async function askClipboardPermission(): Promise<boolean> {
  const permissionName = "clipboard-write" as PermissionName;
  try {
    const { state } = await navigator.permissions.query({
      name: permissionName,
    });
    return state === "granted";
  } catch (err) {
    return false;
  }
}

const utils = {
  convertDivToImage,
  copyImageToClipboard,
  askClipboardPermission,
  constants,
};

export default utils;

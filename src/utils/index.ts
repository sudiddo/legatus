import html2canvas from "html2canvas";

export async function convertDivToImage(
  ref: React.RefObject<HTMLDivElement>
): Promise<HTMLImageElement> {
  if (!ref.current) {
    throw new Error("Div element ref is null");
  }

  const canvas = await html2canvas(ref.current, { useCORS: true });
  const img = new Image();
  img.src = canvas.toDataURL();
  return img;
}

export async function copyImageToClipboard(img: HTMLImageElement) {
  try {
    const blob = await fetch(img.src).then((r) => r.blob());
    const item = new ClipboardItem({ [blob.type]: blob });
    await navigator.clipboard.write([item]);
    return true;
  } catch (err) {
    return false;
  }
}

export async function askClipboardPermission(): Promise<boolean> {
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

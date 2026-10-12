# Integrate <TypographyVortexCanvas /> from ThreeUI using its exact source

You are working in an existing application. Implement this component from the exact source linked or included below. Do not recreate it from the preview, screenshot, description, or filename.

Component: `TypographyVortexCanvas`
Runtime: Canvas 2D
Source revision: `5a736cd3c1f6f19802f61ebb10e1701b9f7aa26e`

Reference brief:
Sable’s complete rotating typography vortex with crisp prerendered rings, drifting glyphs, pointer dissolution, particle dust, and click suction — with dark and light surfaces.

## Current configured usage

```tsx
import { TypographyVortexCanvas } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <TypographyVortexCanvas
        mode="dark"
        speed={1.00}
        ringGrowth={1.21}
        opacity={1.00}
        dissolveRadius={1.00}
        particleAmount={1.00}
        suctionDuration={920}
      />
    </div>
  );
}
```

## Exact implementation source

Complete registered source bundle: [https://threeui.com/source-code/typography-vortex.json](https://threeui.com/source-code/typography-vortex.json)

Required registered files:

- `src/shaders/typography-vortex/TypographyVortexCanvas.tsx` — component · SHA-256 `cf347075dcc6254aeeb3b7f373c02ae90566923b04f1fcd223093fb1b6a587b1`
- `src/shaders/typography-vortex/typographyVortexRenderer.ts` — renderer-source · SHA-256 `b82c8321564f841334c109910bff3a7f629d9f2f7750c91d537b65912a17baff`
- `src/shaders/threeui.css` — shared-style · SHA-256 `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf`

Required binary assets:

Binary assets cannot be represented as executable text. Copy each asset byte-for-byte from the ThreeUI package and verify its hash:

| Path | MIME type | Bytes | SHA-256 |
| --- | --- | ---: | --- |
| `src/shaders/fonts/fragment-mono.woff2` | font/woff2 | 15176 | `4f4dc27f4a770c0d02fde800daa836c8adc0d1e423b28da74baaf0d1cc3ab96c` |

## Implementation requirements

- Preserve the authored structure, styling, shaders, motion, interactions, responsive behavior, dependencies, and asset paths described by the source.
- Use the configured `<TypographyVortexCanvas />` usage above, including the selected variant and props.
- Build directly in the destination project. Do not embed the ThreeUI documentation page and do not approximate the result from its rendered appearance.
- Fetch and read the complete source before editing. If the source cannot be retrieved, stop and report that instead of recreating it.
- After implementation, verify the rendered result and its interactions in the browser.


import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 20,
                    background: '#020617', // bg-bg-primary (dark navy)
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3B82F6', // accent-blue
                    borderRadius: '20%', // Rounded square
                    fontFamily: 'monospace',
                    fontWeight: 700,
                }}
            >
                &gt;_
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}

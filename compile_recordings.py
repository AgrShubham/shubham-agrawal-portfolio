import os
from PIL import Image

output_dir = r'd:\PROJECTS\MyPortfolio2\screen_recordings'

sessions = ['mobile_scroll_session', 'desktop_scroll_session']

for session in sessions:
    frames_dir = os.path.join(output_dir, f'frames_{session}')
    if not os.path.exists(frames_dir):
        print(f'Frames dir {frames_dir} not found, skipping.')
        continue

    frame_files = sorted([os.path.join(frames_dir, f) for f in os.listdir(frames_dir) if f.endswith('.png')])
    if not frame_files:
        print(f'No png frames found in {frames_dir}')
        continue

    print(f'Compiling {len(frame_files)} frames for {session}...')
    images = []
    for f in frame_files:
        im = Image.open(f).convert('RGB')
        # Scale down slightly for optimized web animation file size
        w, h = im.size
        im_resized = im.resize((w // 2, h // 2), Image.Resampling.LANCZOS)
        images.append(im_resized)

    # 1. Save as animated WebP
    webp_path = os.path.join(output_dir, f'{session}.webp')
    images[0].save(
        webp_path,
        save_all=True,
        append_images=images[1:],
        duration=650,
        loop=0,
        quality=85
    )
    print(f'Saved animated WebP: {webp_path} ({os.path.getsize(webp_path):,} bytes)')

    # 2. Save as animated GIF
    gif_path = os.path.join(output_dir, f'{session}.gif')
    images[0].save(
        gif_path,
        save_all=True,
        append_images=images[1:],
        duration=650,
        loop=0,
        optimize=True
    )
    print(f'Saved animated GIF: {gif_path} ({os.path.getsize(gif_path):,} bytes)')

print('All recordings compiled successfully!')

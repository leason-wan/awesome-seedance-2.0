import React, { useRef, useEffect, useState } from 'react';

interface Asset {
    type: 'image' | 'video';
    url: string;
}

interface CookbookCaseProps {
    title: string;
    prompt: string;
    inputAssets: Asset[];
    outputVideo: string;
}

const AutoPlayVideo = ({ src, className }: { src: string; className?: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        video.defaultMuted = true;
        const p = video.play();
        if (p !== undefined) {
            p.catch(() => { });
        }
    }, [src]);

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={className}
        >
            <source src={src} type="video/mp4" />
        </video>
    );
};

/* ── Lightbox Modal ── */
const VideoModal = ({ src, onClose }: { src: string; onClose: () => void }) => {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-[90vw] max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <video
                    autoPlay
                    controls
                    loop
                    playsInline
                    className="w-full h-full object-contain bg-black"
                >
                    <source src={src} type="video/mp4" />
                </video>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/80 transition-all border border-white/10 cursor-pointer"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const CookbookCase: React.FC<CookbookCaseProps> = ({ title, prompt, inputAssets, outputVideo }) => {
    const [modalVideo, setModalVideo] = useState<string | null>(null);

    return (
        <>
            <div className="cookbook-case border border-white/10 rounded-xl overflow-hidden mb-12 bg-[#1b1e23] shadow-2xl transition-all">
                {/* Header */}
                <div className="px-4 py-1.5 bg-white/5 flex justify-between items-center border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="text-blue-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-medium text-gray-300 tracking-tight" style={{ margin: 0, fontSize: '14px' }}>{title}</h3>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <span className="text-[9px] text-gray-500 tracking-widest uppercase">
                            AI Showcase
                        </span>
                    </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 lg:col-span-5 w-full">
                        {/* Source Assets */}
                        {inputAssets && inputAssets.length > 0 && (
                            <div className="space-y-3">
                                <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                    Source Assets
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {inputAssets.map((asset, index) => (
                                        <div
                                            key={index}
                                            className="relative aspect-square rounded-lg overflow-hidden bg-white/5 group border border-white/5 cursor-pointer"
                                            onClick={() => asset.type === 'video' && setModalVideo(asset.url)}
                                        >
                                            {asset.type === 'image' ? (
                                                <img src={asset.url} alt={`Asset ${index + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                                            ) : (
                                                <>
                                                    <AutoPlayVideo src={asset.url} className="absolute inset-0 w-full h-full object-cover" />
                                                    {/* Play icon overlay */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                                        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                                            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                            <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] text-white/80 font-medium pointer-events-none z-10">
                                                {asset.type === 'image' ? 'IMG' : 'VID'}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Prompt */}
                        <div className="space-y-3 flex-1">
                            <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-gray-500/50"></span>
                                Generation Prompt
                            </h4>
                            <div className="bg-gray-800/30 rounded-lg p-4 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20">
                                <p className="text-[13px] text-gray-300 font-mono m-0 leading-relaxed opacity-90">
                                    {prompt}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Output Video) */}
                    <div className="flex flex-col gap-4 lg:col-span-7 w-full h-full">
                        <div className="flex items-center justify-between">
                            <h4 className="text-[11px] font-semibold text-emerald-400/70 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-emerald-500/50"></span>
                                Output Result
                            </h4>
                            <div className="flex items-center gap-1.5 opacity-60">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">Ready</span>
                            </div>
                        </div>

                        <div
                            className="w-full rounded-xl overflow-hidden bg-black aspect-video relative shadow-2xl shadow-black/40 cursor-pointer group"
                            onClick={() => setModalVideo(outputVideo)}
                        >
                            <AutoPlayVideo src={outputVideo} className="absolute inset-0 w-full h-full object-contain" />
                            {/* Play icon overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Footer/Action bar */}
                        <div className="flex justify-between items-center mt-1 px-1">
                            <a
                                href={outputVideo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-[11px] font-semibold text-blue-400/80 hover:text-blue-300 transition-colors no-underline uppercase tracking-tight"
                            >
                                Download
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Lightbox Modal */}
            {modalVideo && (
                <VideoModal src={modalVideo} onClose={() => setModalVideo(null)} />
            )}
        </>
    );
};

export default CookbookCase;

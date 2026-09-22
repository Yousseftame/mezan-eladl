import { useState } from "react";
import { Scale, Share2, ChevronLeft, X, Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const App = () => {
	const [isShareModalOpen, setIsShareModalOpen] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyLink = () => {
		navigator.clipboard.writeText(window.location.href);
		setIsCopied(true);
		
		// Reset button after 2 seconds
		setTimeout(() => setIsCopied(false), 2000);
	};

	const handleWhatsAppShare = () => {
		const url = window.location.href;
		const text = encodeURIComponent("منصة ميزان العدل:\n" + url);
		window.open(`https://wa.me/?text=${text}`, "_blank");
		setIsShareModalOpen(false);
	};

	return (
		<div 
			className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
			style={{ 
				background: "linear-gradient(to right, #103B2E 0%, #07241A 45%, #020D09 100%)", 
				color: "white" 
			}}
			dir="rtl"
		>
			<div className="flex flex-col items-center gap-10 z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
				
				{/* Logo Container mimicking the reference style */}
				<div className="flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-2xl ring-[3px] ring-[#C5A059] ring-offset-8 ring-offset-[#07241A]">
					<Scale className="w-16 h-16 text-[#07241A]" strokeWidth={2} />
				</div>
				
				<div className="space-y-6 text-center mt-6">
					<h1 className="text-7xl md:text-[7rem] lg:text-[9rem] font-black tracking-tight drop-shadow-xl">
						<DiaTextReveal 
							text="ميزان العدل" 
							textColor="white"
							colors={["#ffffff", "#ffffff"]}
							duration={2}
							delay={0.2}
						/>
					</h1>
					
					<p className="text-[#C5A059] text-2xl md:text-3xl font-semibold tracking-widest drop-shadow-sm">
						قريباً...
					</p>
				</div>
				
				{/* Share Button mimicking the reference card */}
				<div className="mt-12 w-full max-w-lg px-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
					<button 
						onClick={() => setIsShareModalOpen(true)}
						className="w-full relative group flex items-center p-4 md:p-5 rounded-2xl bg-[#0B291D] border border-white/5 hover:bg-[#0D3022] transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-[#C5A059]/10"
					>
						{/* Golden right border bar */}
						<div className="absolute top-0 bottom-0 right-0 w-[6px] bg-[#C5A059]" />
						
						{/* Icon Container */}
						<div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl bg-white/5 border border-white/10 ml-4 group-hover:scale-105 transition-transform duration-300 mr-2">
							<Share2 className="w-7 h-7 md:w-8 md:h-8 text-[#C5A059]" strokeWidth={1.5} />
						</div>
						
						{/* Text Content */}
						<div className="flex flex-col items-start flex-1 text-right">
							<span className="text-white font-bold text-xl md:text-2xl tracking-wide mb-1">
								مشاركة الصفحة
							</span>
							<span className="text-white/60 text-sm md:text-base font-medium">
								شارك المنصة مع من تحب
							</span>
						</div>
						
						{/* Chevron */}
						<div className="shrink-0 ml-2">
							<ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-[#C5A059] opacity-80 group-hover:opacity-100 group-hover:-translate-x-1.5 transition-all duration-300" strokeWidth={2} />
						</div>
					</button>
				</div>
			</div>

			{/* Share Modal */}
			<AnimatePresence>
				{isShareModalOpen && (
					<motion.div 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
						onClick={() => setIsShareModalOpen(false)}
					>
						<motion.div 
							initial={{ scale: 0.9, y: 20, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.9, y: 20, opacity: 0 }}
							transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
							className="bg-[#07241A] border border-[#C5A059]/20 w-full max-w-sm rounded-3xl p-6 shadow-2xl relative"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex items-center justify-between mb-6 mt-1">
								<span className="text-xl font-bold text-white">مشاركة</span>
								<button 
									onClick={() => setIsShareModalOpen(false)}
									className="p-1 text-white/50 hover:text-white rounded-full transition-colors"
								>
									<X className="w-6 h-6" />
								</button>
							</div>
							
							<div className="flex flex-col gap-4">
								<button 
									onClick={handleCopyLink}
									className="flex items-center justify-between w-full p-5 rounded-[1.25rem] bg-[#2A303C] hover:bg-[#353C4B] transition-colors"
								>
									<span className={`font-semibold text-lg tracking-wide ${isCopied ? 'text-[#00D28A]' : 'text-white'}`}>
										{isCopied ? 'تم النسخ!' : 'نسخ الرابط'}
									</span>
									{isCopied ? (
										<Check className="w-6 h-6 text-[#00D28A]" strokeWidth={2.5} />
									) : (
										<Copy className="w-6 h-6 text-white" strokeWidth={2} />
									)}
								</button>

								<button 
									onClick={handleWhatsAppShare}
									className="flex items-center justify-between w-full p-5 rounded-[1.25rem] bg-[#112A20] border border-[#1A4F35] hover:bg-[#16382A] transition-colors"
								>
									<span className="font-semibold text-lg text-[#25D366] tracking-wide">مشاركة عبر واتساب</span>
									<WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default App;

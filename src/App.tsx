/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState, ReactNode } from 'react';
import { 
  MessageSquare, 
  Users, 
  Rocket, 
  Calendar, 
  ChevronRight, 
  ExternalLink,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { motion, useInView } from 'motion/react';

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number; key?: string | number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'コミュニティについて', href: '#about' },
    { name: 'イベント', href: '#events' },
    { name: '運営者', href: '#founder' },
  ];

  const discordUrl = "https://discord.gg/rtfjnwJqJ8";

  const activities = [
    {
      title: '相談室',
      description: '起業・ビジネスの悩みを気軽に相談できる専用チャンネル。現役学生起業家が必ず対応。',
      icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: '定期交流会・VC',
      description: 'ボイスチャンネル開放中。定期的に交流会も開催。聞き専OK。',
      icon: <Users className="w-6 h-6 text-purple-400" />,
    },
    {
      title: 'プロジェクト推進室',
      description: 'やりたいことをプロジェクトとして掲示し、仲間集め・メンターからのフィードバックが受けられる。',
      icon: <Rocket className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: '体験型イベント',
      description: '「2時間でビジネスプランを立ててミニ会社をつくる」など、実際に動いて経験できるイベントを定期開催。',
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
    },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                学生起業コミュニティ
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20"
              >
                参加する
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0c] border-b border-white/5 px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base text-gray-400 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium"
            >
              参加する
            </a>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-square bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                やりたいことを、<br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  実現する場所。
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                起業に興味がある学生・社会人が集まるDiscordコミュニティ。<br className="hidden md:block" />
                学生以外も大歓迎。一歩踏み出す仲間を待っています。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-indigo-500 shadow-xl shadow-indigo-500/30"
                >
                  Discordに参加する
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                参加無料・誰でもOK
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Activities Section */}
        <section id="about" className="py-24 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">できること</h2>
                <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Event Section */}
        <section id="events" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">直近のイベント</h2>
                <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                    Upcoming
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-8">学生起業コミュニティ交流会</h3>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">日時</p>
                      <p className="text-gray-200">4月3日（木）17:00〜</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">場所</p>
                      <p className="text-gray-200">Discordボイスチャンネル</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">対象・参加費</p>
                      <p className="text-gray-200">学生・社会人問わず誰でもOK（参加費無料）</p>
                    </div>
                  </div>
                </div>

                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                >
                  参加希望はこちら
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Founder Section */}
        <section id="founder" className="py-24 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">運営者</h2>
                <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
              </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-500 p-1">
                    <div className="w-full h-full bg-[#0a0a0c] rounded-[calc(1.5rem-4px)] flex items-center justify-center overflow-hidden">
                      {/* Placeholder for founder image */}
                      <img 
                        src="https://picsum.photos/seed/founder/800/800" 
                        alt="ゆうくん" 
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/20 blur-3xl rounded-full -z-10" />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-3xl font-bold mb-2">ゆうくん</h3>
                  <p className="text-indigo-400 font-medium mb-6">現役学生起業家</p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      'N高等学校 起業部 卒業',
                      '学生が起業する上場企業主催インターンシップ 在籍中',
                      'AIアプリ開発・販売中（BOOTH）'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-400">
                        <ChevronRight className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-6 rounded-2xl bg-white/5 border-l-4 border-indigo-500 italic text-gray-300">
                    「やりたいことがある人の第一歩を、一緒につくりたい。」
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Join Method Section */}
        <section id="discord" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">参加する</h2>
                <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
              </div>
            </FadeIn>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  { step: 'STEP 1', text: '下のボタンからDiscordサーバーに参加' },
                  { step: 'STEP 2', text: '#自己紹介チャンネルで自己紹介を投稿' },
                  { step: 'STEP 3', text: '気になるチャンネルに参加して発言してみよう' },
                ].map((item, index) => (
                  <FadeIn key={item.step} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-4">
                        {item.step}
                      </div>
                      <p className="text-gray-300 font-medium">{item.text}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn>
                <div className="text-center">
                  <a
                    href={discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/40 mb-6"
                  >
                    今すぐDiscordに参加する
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </a>
                  <p className="text-gray-500 text-sm">
                    参加無料・退会自由・学生以外も歓迎
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">
            学生起業コミュニティ｜運営：ゆうくん
          </p>
          <p className="text-gray-600 text-sm">
            © 2025 学生起業コミュニティ
          </p>
        </div>
      </footer>
    </div>
  );
}

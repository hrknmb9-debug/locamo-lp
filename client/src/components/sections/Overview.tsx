import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, DollarSign, Share2 } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';

/**
 * Overview Section
 * Design: Neo-Tokyo Minimal
 * - Hero with animated text (char-by-char)
 * - Problem cards with icons
 * - Service features
 * - CTA buttons
 * - Count-up animation for stats
 */

function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const count = useCountUp(50, 2000, isVisible);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 md:gap-8 text-center animate-fade-in-up">
      <div>
        <div className="text-3xl md:text-4xl font-bold text-accent">{count}+</div>
        <p className="text-sm md:text-base text-muted-foreground mt-2">制作実績</p>
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-bold text-accent">0円</div>
        <p className="text-sm md:text-base text-muted-foreground mt-2">月額費用</p>
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-bold text-accent">2週間</div>
        <p className="text-sm md:text-base text-muted-foreground mt-2">納期目安</p>
      </div>
    </div>
  );
}

export default function Overview() {
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hero text character by character
    const heroElement = heroTextRef.current;
    if (!heroElement) return;

    const text = heroElement.textContent || '';
    heroElement.textContent = '';

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        const span = document.createElement('span');
        span.textContent = text[index];
        span.className = 'animate-char-appear inline-block';
        span.style.animationDelay = `${index * 0.05}s`;
        heroElement.appendChild(span);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Main Catchphrase */}
          <h1
            ref={heroTextRef}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Instagramだけでは、もったいない。
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
            大阪の個人店向けLP・ホームページ制作。Instagramとの連携を前提に設計された、買い切り型のWeb制作サービス。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
            >
              無料診断を受ける
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 font-semibold px-8 py-6 text-base"
            >
              サービスを見る
            </Button>
          </div>

          {/* Stats */}
          <StatsSection />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Instagramのみ運用の課題
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            個人店がInstagramだけに頼ると、こんな問題が生じます
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'フォロワー依存',
                desc: 'フォロワー数に左右される不安定な集客',
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: '広告費の増加',
                desc: 'アルゴリズム変更で広告費が増加する可能性',
              },
              {
                icon: <Share2 className="w-8 h-8" />,
                title: '情報の分散',
                desc: 'メニュー・アクセス・営業時間が散在',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'SEO対策なし',
                desc: 'Google検索からの流入が期待できない',
              },
            ].map((item, idx) => (
              <ProblemCard key={idx} item={item} delay={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* About Locamo Section */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Locamoとは
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Instagramと組み合わせることで、集客力を最大化するLP・ホームページ制作サービス
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: '地域密着',
                desc: '大阪の個人店を専門に対応。地元の事情を理解した提案が可能。',
              },
              {
                title: '買い切り型',
                desc: '制作費は一括買い切り。月額費用なし。ランニングコストゼロ。',
              },
              {
                title: 'Instagram連携設計',
                desc: 'Instagramからの流入導線を最初から組み込んだ設計。',
              },
            ].map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} delay={idx} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base transition-all hover:scale-105"
            >
              まずは無料診断
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProblemCard({ item, delay }: { item: any; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-2 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.1 * delay}s` }}
    >
      <div className="text-accent mb-4">{item.icon}</div>
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-muted-foreground text-sm">{item.desc}</p>
    </div>
  );
}

function FeatureCard({ feature, delay }: { feature: any; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${0.1 * delay}s` }}
    >
      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-accent">{delay + 1}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.desc}</p>
    </div>
  );
}

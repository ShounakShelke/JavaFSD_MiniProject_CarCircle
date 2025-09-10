import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { AuthModal } from "@/components/auth/auth-modal";
import { CustomerDashboard } from "./dashboards/CustomerDashboard";
import { VendorDashboard } from "./dashboards/VendorDashboard";
import { MechanicDashboard } from "./dashboards/MechanicDashboard";
import { AdminDashboard } from "./dashboards/AdminDashboard";
import { useToast } from "@/hooks/use-toast";

type UserRole = "customer" | "vendor" | "mechanic" | "admin" | null;

const Index = () => {
  const [currentUser, setCurrentUser] = useState<UserRole>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { toast } = useToast();

  // Initialize GSAP animations on component mount
  useEffect(() => {
    import("gsap").then((gsap) => {
      gsap.default.fromTo(
        ".animate-fade-in",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    });
  }, []);

  const handleLogin = () => {
    setIsAuthModalOpen(true);
  };

  const handleRoleSelect = (role: string) => {
    setCurrentUser(role as UserRole);
    toast({
      title: "Welcome to CarCircle!",
      description: `You've successfully logged in as a ${role}.`,
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
  };

  // Render appropriate dashboard based on user role
  const renderDashboard = () => {
    switch (currentUser) {
      case "customer":
        return <CustomerDashboard />;
      case "vendor":
        return <VendorDashboard />;
      case "mechanic":
        return <MechanicDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return null;
    }
  };

  // If user is logged in, show dashboard
  if (currentUser) {
    return (
      <div className="min-h-screen">
        {/* Navigation bar for logged-in users */}
        <div className="fixed top-4 right-4 z-50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </motion.button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentUser}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {renderDashboard()}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Landing page for non-authenticated users
  return (
    <div className="min-h-screen bg-background">
      <Navbar onLoginClick={handleLogin} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="animate-fade-in"
      >
        <HeroSection onGetStartedClick={handleLogin} />
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
                Why Choose CarCircle?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the future of car rental management with our comprehensive platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Smart Booking",
                  description: "AI-powered recommendations and instant booking",
                  color: "customer"
                },
                {
                  title: "Fleet Management",
                  description: "Comprehensive tools for fleet owners",
                  color: "vendor"
                },
                {
                  title: "Maintenance Tracking",
                  description: "Streamlined service and maintenance workflows",
                  color: "mechanic"
                },
                {
                  title: "Advanced Analytics",
                  description: "Real-time insights and reporting",
                  color: "admin"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-full bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                    <div className={`w-6 h-6 rounded-full bg-${feature.color}`}></div>
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
                Ready to Transform Your Car Rental Experience?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust CarCircle for their car rental needs
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogin}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </motion.main>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onRoleSelect={handleRoleSelect}
      />
    </div>
  );
};

export default Index;

import { motion } from "framer-motion";
import { Check, Star, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/ui/navbar";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic Rental",
      description: "Perfect for occasional car rentals",
      price: "₹0",
      period: "Setup Fee",
      color: "customer",
      popular: false,
      features: [
        "Access to 1000+ cars",
        "Basic insurance included",
        "24/7 customer support",
        "Mobile app access",
        "Standard booking"
      ],
      cta: "Start Renting",
      icon: Users
    },
    {
      name: "Premium Member",
      description: "Best for frequent travelers",
      price: "₹999",
      period: "/month",
      color: "vendor", 
      popular: true,
      features: [
        "All Basic features",
        "Premium car access",
        "Priority booking",
        "Free cancellation",
        "Concierge service",
        "Airport pickup/drop",
        "Fuel included plans"
      ],
      cta: "Go Premium",
      icon: Star
    },
    {
      name: "Fleet Owner",
      description: "For car owners and fleet managers",
      price: "₹4,999",
      period: "/month",
      color: "admin",
      popular: false,
      features: [
        "List unlimited vehicles",
        "Advanced analytics",
        "Revenue optimization",
        "Maintenance tracking",
        "Insurance management",
        "Driver verification",
        "Custom pricing rules"
      ],
      cta: "Start Earning",
      icon: Zap
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large businesses",
      price: "Custom",
      period: "Pricing",
      color: "mechanic",
      popular: false,
      features: [
        "All Fleet Owner features",
        "White-label solution",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "Advanced reporting"
      ],
      cta: "Contact Sales",
      icon: Shield
    }
  ];

  const additionalServices = [
    {
      name: "Insurance Plus",
      price: "₹299/day",
      description: "Comprehensive coverage with zero deductible"
    },
    {
      name: "Fuel Package",
      price: "₹499/day", 
      description: "Unlimited fuel for your rental period"
    },
    {
      name: "Driver Service",
      price: "₹1,999/day",
      description: "Professional chauffeur service"
    },
    {
      name: "GPS & Accessories",
      price: "₹199/day",
      description: "Navigation system and travel accessories"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-12 bg-gradient-primary"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-montserrat font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. From individual rentals to enterprise solutions, 
            we have flexible pricing that grows with you.
          </p>
        </div>
      </motion.section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className={`relative overflow-hidden h-full ${
                    plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''
                  }`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    
                    <CardHeader className={plan.popular ? 'pt-12' : ''}>
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className={`h-8 w-8 text-${plan.color}`} />
                        {plan.popular && (
                          <Badge variant="secondary">Best Value</Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="pt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1">
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your rental experience with our premium add-on services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-3">{service.price}</p>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Booking
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's included in the rental price?",
                answer: "Basic rental includes vehicle usage, standard insurance, and 24/7 support. Additional services like fuel and driver are optional add-ons."
              },
              {
                question: "Can I cancel my booking?",
                answer: "Yes, free cancellation is available up to 24 hours before pickup for Premium members, and up to 12 hours for Basic rentals."
              },
              {
                question: "Are there any hidden fees?",
                answer: "No hidden fees! All costs are transparently displayed during booking, including taxes, insurance, and any additional services you select."
              },
              {
                question: "How does the Fleet Owner plan work?",
                answer: "List your vehicles on our platform, set your pricing, and earn money when customers book your cars. We handle payments and provide insurance coverage."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-primary"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust CarCircle for their mobility needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PricingPage;
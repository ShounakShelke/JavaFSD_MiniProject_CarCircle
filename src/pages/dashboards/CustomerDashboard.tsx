import { motion } from "framer-motion";
import { Car, Calendar, CreditCard, Star, MessageSquare, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CustomerDashboard = () => {
  const stats = [
    { label: "Active Rentals", value: "2", icon: Car, color: "customer" },
    { label: "Completed Trips", value: "15", icon: Calendar, color: "customer" },
    { label: "Total Spent", value: "₹45,000", icon: CreditCard, color: "customer" },
    { label: "Loyalty Points", value: "1,250", icon: Award, color: "secondary" },
  ];

  const activeRentals = [
    {
      id: 1,
      car: "BMW X3",
      pickup: "2024-01-15",
      return: "2024-01-18",
      status: "Active",
      location: "Mumbai Central"
    },
    {
      id: 2,
      car: "Honda City",
      pickup: "2024-01-20",
      return: "2024-01-22",
      status: "Upcoming",
      location: "Pune Airport"
    }
  ];

  return (
    <div className="min-h-screen bg-background theme-customer">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-card border-b border-border p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-montserrat font-bold text-foreground">
              Welcome back, John!
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your rentals and explore new vehicles
            </p>
          </div>
          <Button variant="hero">
            <Car className="h-4 w-4 mr-2" />
            Browse Cars
          </Button>
        </div>
      </motion.header>

      <div className="p-6">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                    <IconComponent className={`h-4 w-4 text-${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Rentals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-customer" />
                  Active & Upcoming Rentals
                </CardTitle>
                <CardDescription>
                  Manage your current and future bookings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeRentals.map((rental) => (
                  <motion.div
                    key={rental.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg border border-border hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{rental.car}</h4>
                          <Badge 
                            variant={rental.status === "Active" ? "default" : "secondary"}
                            className={rental.status === "Active" ? "bg-customer text-white" : ""}
                          >
                            {rental.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {rental.pickup} to {rental.return} • {rental.location}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {rental.status === "Active" && (
                          <Button variant="default" size="sm" className="bg-customer hover:bg-customer/90">
                            Track Car
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-customer hover:bg-customer/90">
                  <Car className="h-4 w-4 mr-2" />
                  Book New Car
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  View History
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Payment Methods
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Write Review
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Support Chat
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Loyalty Status</CardTitle>
                <CardDescription>Gold Member</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Points to Platinum</span>
                    <span>750 more</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-customer h-2 rounded-full transition-all duration-500"
                      style={{ width: '62%' }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Earn 2x points on weekend bookings
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
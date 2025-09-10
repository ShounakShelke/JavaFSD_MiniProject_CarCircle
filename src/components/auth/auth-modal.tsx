import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Users, Wrench, Shield, Eye, EyeOff } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleSelect: (role: string) => void;
}

type AuthMode = "login" | "signup" | "role-select";
type UserRole = "customer" | "vendor" | "mechanic" | "admin";

const roleConfig = {
  customer: {
    icon: Car,
    title: "Customer",
    description: "Book and manage your car rentals",
    color: "customer",
    features: ["Browse cars", "Book rentals", "Track bookings", "Reviews & ratings"]
  },
  vendor: {
    icon: Users,
    title: "Fleet Owner",
    description: "Manage your vehicle fleet",
    color: "vendor", 
    features: ["Fleet management", "Booking analytics", "Revenue tracking", "Customer communication"]
  },
  mechanic: {
    icon: Wrench,
    title: "Mechanic",
    description: "Handle vehicle maintenance",
    color: "mechanic",
    features: ["Maintenance schedules", "Service reports", "Vehicle status", "Job tracking"]
  },
  admin: {
    icon: Shield,
    title: "Admin",
    description: "System administration",
    color: "admin",
    features: ["User management", "System monitoring", "Analytics", "Audit logs"]
  }
};

export const AuthModal = ({ isOpen, onClose, onRoleSelect }: AuthModalProps) => {
  const [mode, setMode] = useState<AuthMode>("role-select");
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setMode("login");
  };

  const handleAuth = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
      onClose();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-montserrat text-center">
            {mode === "role-select" && "Choose Your Role"}
            {mode === "login" && `Sign In as ${selectedRole ? roleConfig[selectedRole].title : ""}`}
            {mode === "signup" && `Create Account as ${selectedRole ? roleConfig[selectedRole].title : ""}`}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {mode === "role-select" && (
            <motion.div
              key="role-select"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
            >
              {Object.entries(roleConfig).map(([role, config]) => {
                const IconComponent = config.icon;
                return (
                  <motion.div
                    key={role}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 hover:border-${config.color}`}
                      onClick={() => handleRoleSelect(role as UserRole)}
                    >
                      <CardHeader className="text-center">
                        <div className={`mx-auto w-16 h-16 rounded-full bg-${config.color}/10 flex items-center justify-center mb-2`}>
                          <IconComponent className={`h-8 w-8 text-${config.color}`} />
                        </div>
                        <CardTitle className="text-xl font-montserrat">{config.title}</CardTitle>
                        <CardDescription>{config.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {config.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className={`w-2 h-2 rounded-full bg-${config.color}`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {(mode === "login" || mode === "signup") && selectedRole && (
            <motion.div
              key="auth-form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 p-4"
            >
              <div className="text-center">
                <div className={`mx-auto w-16 h-16 rounded-full bg-${roleConfig[selectedRole].color}/10 flex items-center justify-center mb-4`}>
                  {(() => {
                    const IconComponent = roleConfig[selectedRole].icon;
                    return <IconComponent className={`h-8 w-8 text-${roleConfig[selectedRole].color}`} />;
                  })()}
                </div>
                <Button 
                  variant="ghost" 
                  onClick={() => setMode("role-select")}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  ← Change Role
                </Button>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                {mode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="Enter your password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {mode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleAuth}
                >
                  {mode === "login" ? "Sign In" : "Create Account"}
                </Button>

                <div className="text-center">
                  <Button
                    variant="ghost"
                    onClick={() => setMode(mode === "login" ? "signup" : "login")}
                    className="text-sm"
                  >
                    {mode === "login" 
                      ? "Don't have an account? Sign up" 
                      : "Already have an account? Sign in"
                    }
                  </Button>
                </div>

                {mode === "login" && (
                  <div className="text-center">
                    <Button variant="ghost" className="text-sm text-muted-foreground">
                      Forgot password?
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};
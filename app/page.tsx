'use client'

import { Factory, Flame, Trees, Car, CloudRain, Thermometer, Waves, Wind, Users, Leaf, Zap, Home, ShoppingBag, Droplets, TrendingUp, AlertTriangle, Globe, Heart } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function ClimateInfographic() {
  // Data from IPCC AR6 and recent studies
  const temperatureData = [
    { year: '1880', temp: -0.16 },
    { year: '1900', temp: -0.08 },
    { year: '1920', temp: -0.27 },
    { year: '1940', temp: 0.12 },
    { year: '1960', temp: -0.03 },
    { year: '1980', temp: 0.26 },
    { year: '2000', temp: 0.61 },
    { year: '2020', temp: 1.02 },
    { year: '2023', temp: 1.45 },
  ]

  const emissionsData = [
    { source: 'Energy', value: 73.2, color: '#D32F2F' },
    { source: 'Agriculture', value: 18.4, color: '#F57C00' },
    { source: 'Industry', value: 5.2, color: '#FF6B35' },
    { source: 'Waste', value: 3.2, color: '#FFA726' },
  ]

  const seaLevelData = [
    { year: '1900', level: 0 },
    { year: '1920', level: 1.2 },
    { year: '1940', level: 2.1 },
    { year: '1960', level: 3.5 },
    { year: '1980', level: 6.8 },
    { year: '2000', level: 11.2 },
    { year: '2020', level: 21.5 },
  ]

  const co2Data = [
    { year: '1960', ppm: 317 },
    { year: '1970', ppm: 326 },
    { year: '1980', ppm: 339 },
    { year: '1990', ppm: 354 },
    { year: '2000', ppm: 369 },
    { year: '2010', ppm: 389 },
    { year: '2020', ppm: 412 },
    { year: '2023', ppm: 421 },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-climate-dark via-gray-900 to-climate-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <Globe className="w-20 h-20 md:w-32 md:h-32 text-climate-cool float-animation" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-climate-orange via-climate-red to-climate-warm bg-clip-text text-transparent">
            Climate Change Crisis
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Understanding the Causes, Confronting the Consequences
          </p>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Based on IPCC AR6 Reports and peer-reviewed climate science
          </p>
        </div>
      </section>

      {/* Key Statistics Banner */}
      <section className="py-12 px-4 md:px-8 bg-climate-red bg-opacity-10 border-y border-climate-red border-opacity-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="pulse-glow rounded-lg p-6 bg-gradient-to-br from-climate-red to-climate-orange">
              <Thermometer className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold mb-2">+1.45°C</div>
              <div className="text-sm md:text-base">Global Temperature Rise Since 1880</div>
              <div className="text-xs mt-2 opacity-80">IPCC AR6, 2023</div>
            </div>
            <div className="pulse-glow rounded-lg p-6 bg-gradient-to-br from-climate-orange to-climate-warm">
              <TrendingUp className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold mb-2">421 ppm</div>
              <div className="text-sm md:text-base">Atmospheric CO₂ Concentration</div>
              <div className="text-xs mt-2 opacity-80">NOAA, 2023</div>
            </div>
            <div className="pulse-glow rounded-lg p-6 bg-gradient-to-br from-climate-warm to-climate-orange">
              <Waves className="w-12 h-12 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-bold mb-2">21.5 cm</div>
              <div className="text-sm md:text-base">Sea Level Rise Since 1900</div>
              <div className="text-xs mt-2 opacity-80">NASA, 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Change Chart */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-climate-orange">
              Global Temperature Anomaly
            </h2>
            <p className="text-gray-400 text-sm md:text-base">Temperature change relative to 1951-1980 average (°C)</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-4 md:p-8 backdrop-blur-sm border border-gray-700">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis
                  dataKey="year"
                  stroke="#fff"
                  style={{ fontSize: '14px' }}
                />
                <YAxis
                  stroke="#fff"
                  style={{ fontSize: '14px' }}
                  label={{ value: 'Temperature Anomaly (°C)', angle: -90, position: 'insideLeft', fill: '#fff' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #D32F2F', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#D32F2F"
                  strokeWidth={3}
                  dot={{ fill: '#D32F2F', r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Source: NASA GISS Surface Temperature Analysis (GISTEMP v4), 2023
            </p>
          </div>
        </div>
      </section>

      {/* CAUSES SECTION */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-transparent via-climate-red via-opacity-5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-climate-red" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-climate-red">
              PRIMARY CAUSES
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Human activities are driving unprecedented changes to Earth's climate system
            </p>
          </div>

          {/* Emissions Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-climate-orange">
                Global GHG Emissions by Sector
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={emissionsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ source, value }) => `${source}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {emissionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #F57C00', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-400 mt-4 text-center">
                Source: IPCC AR6 Working Group III, 2022
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-climate-orange">
                Atmospheric CO₂ Concentration
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={co2Data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="year" stroke="#fff" />
                  <YAxis stroke="#fff" domain={[300, 430]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #F57C00', borderRadius: '8px' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ppm"
                    stroke="#F57C00"
                    strokeWidth={3}
                    dot={{ fill: '#F57C00', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-400 mt-4 text-center">
                Source: NOAA Global Monitoring Laboratory, 2023
              </p>
            </div>
          </div>

          {/* Cause Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-climate-red to-climate-orange rounded-xl p-6 transform transition hover:scale-105">
              <Factory className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fossil Fuel Combustion</h3>
              <p className="text-sm mb-3">Coal, oil, and natural gas burning for energy accounts for 73% of global emissions</p>
              <div className="bg-black bg-opacity-30 rounded p-2 text-xs">
                <strong>Impact:</strong> ~36.3 Gt CO₂/year
              </div>
            </div>

            <div className="bg-gradient-to-br from-climate-orange to-climate-warm rounded-xl p-6 transform transition hover:scale-105">
              <Trees className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Deforestation</h3>
              <p className="text-sm mb-3">Loss of 10 million hectares of forest annually reduces carbon absorption capacity</p>
              <div className="bg-black bg-opacity-30 rounded p-2 text-xs">
                <strong>Impact:</strong> ~4.1 Gt CO₂/year
              </div>
            </div>

            <div className="bg-gradient-to-br from-climate-warm to-climate-orange rounded-xl p-6 transform transition hover:scale-105">
              <Car className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Transportation</h3>
              <p className="text-sm mb-3">Vehicles and aviation contribute 16% of global greenhouse gas emissions</p>
              <div className="bg-black bg-opacity-30 rounded p-2 text-xs">
                <strong>Impact:</strong> ~8.2 Gt CO₂eq/year
              </div>
            </div>

            <div className="bg-gradient-to-br from-climate-orange to-climate-red rounded-xl p-6 transform transition hover:scale-105">
              <Flame className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Industrial Processes</h3>
              <p className="text-sm mb-3">Manufacturing, cement production, and chemical processes release significant GHGs</p>
              <div className="bg-black bg-opacity-30 rounded p-2 text-xs">
                <strong>Impact:</strong> ~5.2 Gt CO₂eq/year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSEQUENCES SECTION */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Thermometer className="w-16 h-16 mx-auto mb-4 text-climate-warm" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-climate-warm">
              CRITICAL CONSEQUENCES
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              The impacts are accelerating across every ecosystem and continent
            </p>
          </div>

          {/* Sea Level Rise Chart */}
          <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-700 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-climate-warm">
              Global Mean Sea Level Rise (cm)
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={seaLevelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="year" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #FF6B35', borderRadius: '8px' }}
                />
                <Bar dataKey="level" fill="#4A90E2" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Source: NASA Sea Level Change Portal, 2023
            </p>
          </div>

          {/* Consequence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 border-2 border-blue-400">
              <Waves className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Rising Sea Levels</h3>
              <p className="text-sm mb-4">Sea levels rising 3.4mm/year, threatening coastal cities and small island nations</p>
              <ul className="text-xs space-y-1">
                <li>• 680 million people in low-lying areas at risk</li>
                <li>• Projected 0.6-1.1m rise by 2100</li>
                <li>• Coastal flooding events doubled since 2000</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-climate-red to-red-900 rounded-xl p-6 border-2 border-climate-red">
              <CloudRain className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Extreme Weather Events</h3>
              <p className="text-sm mb-4">Hurricanes, droughts, floods, and heatwaves increasing in frequency and intensity</p>
              <ul className="text-xs space-y-1">
                <li>• Heat waves 5x more frequent than 1960s</li>
                <li>• Category 4-5 hurricanes doubled</li>
                <li>• Economic losses: $280B annually</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-climate-orange to-orange-900 rounded-xl p-6 border-2 border-climate-orange">
              <Flame className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Ecosystem Collapse</h3>
              <p className="text-sm mb-4">Widespread biodiversity loss and habitat destruction across all biomes</p>
              <ul className="text-xs space-y-1">
                <li>• 1 million species at risk of extinction</li>
                <li>• 50% coral reefs bleached since 2016</li>
                <li>• Arctic ice declining 13% per decade</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-600 to-orange-700 rounded-xl p-6 border-2 border-yellow-500">
              <Droplets className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Water Scarcity</h3>
              <p className="text-sm mb-4">Changing precipitation patterns and glacier melting disrupting freshwater supplies</p>
              <ul className="text-xs space-y-1">
                <li>• 2 billion lack safe drinking water</li>
                <li>• Glaciers losing 267 Gt ice/year</li>
                <li>• Groundwater depletion accelerating</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-700 to-orange-900 rounded-xl p-6 border-2 border-amber-600">
              <Leaf className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Food Security Threats</h3>
              <p className="text-sm mb-4">Crop yields declining due to heat stress, droughts, and unpredictable growing seasons</p>
              <ul className="text-xs space-y-1">
                <li>• 10% crop yield reduction projected</li>
                <li>• 820 million people food insecure</li>
                <li>• Fisheries declining 4% per decade</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-700 to-pink-900 rounded-xl p-6 border-2 border-red-500">
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Human Health Impacts</h3>
              <p className="text-sm mb-4">Heat-related mortality, vector-borne diseases, and air quality deterioration</p>
              <ul className="text-xs space-y-1">
                <li>• 250,000 additional deaths/year by 2050</li>
                <li>• Malaria/dengue range expanding</li>
                <li>• Air pollution kills 7 million/year</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIONS SECTION */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-transparent via-climate-green via-opacity-10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Zap className="w-16 h-16 mx-auto mb-4 text-climate-green" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-climate-green">
              TAKE ACTION NOW
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Every action counts. Here's how individuals and organizations can make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Individual Actions */}
            <div className="bg-gradient-to-br from-climate-green to-green-900 rounded-2xl p-8 border-2 border-green-500">
              <div className="flex items-center mb-6">
                <Users className="w-10 h-10 mr-3" />
                <h3 className="text-3xl font-bold">Individual Actions</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Zap className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Reduce Energy Consumption</h4>
                      <p className="text-sm text-gray-200">Switch to LED bulbs, use programmable thermostats, unplug electronics. <strong>Impact:</strong> Save 1-2 tons CO₂/year</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Car className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Sustainable Transportation</h4>
                      <p className="text-sm text-gray-200">Walk, bike, carpool, or use public transit. Consider EVs. <strong>Impact:</strong> Reduce 2.4 tons CO₂/year</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Leaf className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Plant-Based Diet</h4>
                      <p className="text-sm text-gray-200">Reduce meat consumption, especially beef and lamb. <strong>Impact:</strong> Save 0.8 tons CO₂/year</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <ShoppingBag className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Conscious Consumption</h4>
                      <p className="text-sm text-gray-200">Buy less, choose sustainable products, repair and reuse. <strong>Impact:</strong> Reduce waste by 50%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Home className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Home Renewable Energy</h4>
                      <p className="text-sm text-gray-200">Install solar panels, switch to renewable energy providers. <strong>Impact:</strong> Save 3-4 tons CO₂/year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizational Actions */}
            <div className="bg-gradient-to-br from-climate-cool to-blue-900 rounded-2xl p-8 border-2 border-blue-500">
              <div className="flex items-center mb-6">
                <Factory className="w-10 h-10 mr-3" />
                <h3 className="text-3xl font-bold">Organizational Actions</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Net-Zero Commitments</h4>
                      <p className="text-sm text-gray-200">Set science-based targets aligned with 1.5°C pathway. Measure and reduce Scope 1, 2, and 3 emissions comprehensively</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Zap className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Renewable Energy Transition</h4>
                      <p className="text-sm text-gray-200">Power operations with 100% renewable electricity. Install on-site solar/wind generation and energy storage systems</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Wind className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Circular Economy Practices</h4>
                      <p className="text-sm text-gray-200">Eliminate waste through product redesign, reuse programs, and closed-loop manufacturing processes</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Trees className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Ecosystem Restoration</h4>
                      <p className="text-sm text-gray-200">Invest in reforestation, mangrove restoration, and biodiversity conservation projects at scale</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black bg-opacity-30 rounded-lg p-4">
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Supply Chain Decarbonization</h4>
                      <p className="text-sm text-gray-200">Collaborate with suppliers to reduce emissions. Prioritize low-carbon materials and transportation methods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="mt-12 bg-gradient-to-r from-climate-red via-climate-orange to-climate-warm rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">The Time to Act is NOW</h3>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              We have a narrow window to limit warming to 1.5°C. Every tenth of a degree matters. Every action counts.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="bg-black bg-opacity-40 rounded-lg px-6 py-3">
                <p className="text-sm text-gray-200">Global emissions must fall</p>
                <p className="text-3xl font-bold">45%</p>
                <p className="text-sm text-gray-200">by 2030 (vs. 2010 levels)</p>
              </div>
              <div className="bg-black bg-opacity-40 rounded-lg px-6 py-3">
                <p className="text-sm text-gray-200">Achieve net-zero by</p>
                <p className="text-3xl font-bold">2050</p>
                <p className="text-sm text-gray-200">to limit warming to 1.5°C</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-climate-cool">Data Sources & References</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold mb-2 text-climate-orange">IPCC Reports</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• IPCC AR6 Climate Change 2021: The Physical Science Basis</li>
                <li>• IPCC AR6 Working Group II: Impacts, Adaptation and Vulnerability (2022)</li>
                <li>• IPCC AR6 Working Group III: Mitigation of Climate Change (2022)</li>
                <li>• IPCC Special Report: Global Warming of 1.5°C (2018)</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold mb-2 text-climate-orange">Research Institutions</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• NASA Goddard Institute for Space Studies (GISS)</li>
                <li>• NOAA Global Monitoring Laboratory</li>
                <li>• NASA Sea Level Change Portal</li>
                <li>• World Meteorological Organization (WMO)</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold mb-2 text-climate-orange">Key Studies</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Ripple et al. (2023): "World Scientists' Warning on Climate Change"</li>
                <li>• Hausfather & Peters (2020): "Emissions – the 'business as usual' story"</li>
                <li>• Lenton et al. (2023): "Climate tipping points" Nature Reviews</li>
                <li>• Poore & Nemecek (2018): "Reducing food's environmental impacts"</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold mb-2 text-climate-orange">Additional Data</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Global Carbon Project (2023)</li>
                <li>• UN Environment Programme Emissions Gap Report (2023)</li>
                <li>• International Energy Agency World Energy Outlook (2023)</li>
                <li>• World Resources Institute Climate Data Explorer</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-8">
            All data current as of 2023. For the most recent updates, visit ipcc.ch and climate.nasa.gov
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 text-sm border-t border-gray-800">
        <p className="mb-2">This infographic is based on peer-reviewed scientific research and IPCC assessment reports.</p>
        <p>Climate action is urgent. Share this information and take action today.</p>
      </footer>
    </main>
  )
}
